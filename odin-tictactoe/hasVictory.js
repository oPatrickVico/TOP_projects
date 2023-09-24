const chainLen = 3;
const gridEdge = 3;

function isConnected(chainA, chainB) {
  return chainA.reduce((result, element) => result |= chainB.includes(element), false);
}

function extendChain(extended, extensor) {
  let result = extended.slice();
  for (let element of extensor) {
    if (!extended.includes(element)) {
      result.push(element);
    }
  }
  return result.sort((a, b) => a - b);
}

function isValidChain(chain) {
  return (
    isHorizontalLine(chain)    ||
    isVerticalLine(chain)      ||
    isBackslashLine(chain)     ||
    isForwardslashLine(chain)
  );
}

function isHorizontalLine(chain) {
  if (chainLen === 3 && !(chain[0] % gridEdge === 0)) {
    return false;
  }
  let result = true;
  for (let i = 0; i < chain.length - 1; i++) {
    let currentNumber = chain[i];
    let nextNumber = chain[i + 1];
    result &= currentNumber + 1 === nextNumber;
  }
  return result;
}

function isVerticalLine(chain) {
  let result = true;
  for (let i = 0; i < chain.length - 1; i++) {
    let currentNumber = chain[i] + gridEdge;
    let nextNumber = chain[i + 1];
    result &= currentNumber === nextNumber;
  }
  return result;
}

function isBackslashLine(chain) {
  let result = true;
  for (let i = 0; i < chain.length - 1; i++) {
    let currentNumber = chain[i] + (gridEdge + 1);
    let nextNumber = chain[i + 1];
    result &= currentNumber === nextNumber;
  }
  return result;
}

function isForwardslashLine(chain) {
  if (chainLen === 3 && (chain[0] === 0 || chain[chainLen - 1] === 8)) {
    return false;
  }
  let result = true;
  for (let i = 0; i < chain.length - 1; i++) {
    let currentNumber = chain[i] + (gridEdge - 1);
    let nextNumber = chain[i + 1];
    result &= currentNumber === nextNumber;
  }
  return result;
}

function onOppositeEdges(a, b) {
  a > b ? ([a, b] = [b, a]) : '';
  const aLeftEdge = a % gridEdge === 0;
  const aRightEdge = a % gridEdge === gridEdge - 1;
  const bLeftEdge = b % gridEdge === 0;
  const bRightEdge = b % gridEdge === gridEdge - 1;
  const result = !((aLeftEdge && bRightEdge) || (aRightEdge && bLeftEdge));
  return result;
}

function isNeighbour(a, b) {
  a > b ? ([a, b] = [b, a]) : ''; // sort pair into descending order, i think?
  return (
    a === b - 1 || // west
    a === b + 1 || // east
    a === b - gridEdge || // north
    a === b + gridEdge || // south
    a === b + gridEdge + 1 || // south-east
    a === b - gridEdge + 1 || // north-east
    a === b + gridEdge - 1 || // south-west
    a === b - gridEdge - 1 // north-west
  );
}

function checkForVictory(tempLinks, currentLink = undefined) {
  while (tempLinks.length > chainLen - 2) {
    currentLink = tempLinks.pop();
    for (let i = 0; i < tempLinks.length; i++) {
      const tempLink = tempLinks[i];
      if (!isConnected(currentLink, tempLink)) continue;
      const currentChain = extendChain(currentLink, tempLink);
      if (isValidChain(currentChain) && chainLen === 3) return true;
    }
  }
  return false;
}

function hasVictory(links) {
  if (links.length < chainLen - 1) return false;
  const tempLinks = [...links];

  return checkForVictory(tempLinks);
}

const result = hasVictory(
  [
    [2, 4],
    [6, 4],
  ],
  chainLen
);
console.log(result);

//   //Checking for 4-link chains
//   if (chainLen > currentChain.length) {
//     for (const nextLink of tempLinks) {
//       if (nextLink === tempLink) {
//         continue;
//       }
//       if (isConnected(currentChain, nextLink)) {
//         const newerChain = extendChain(currentChain, nextLink);
//         if (
//           isValidChain(newerChain) &&
//           newerChain.length === chainLen
//         ) {
//           return true;
//         }
//       }
//     }
//   }
//   // Done checking for 4-links chain
//   else {
