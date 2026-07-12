import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const terminal = createInterface({ input, output });

function runMockAgent(userInput) {
  return `我收到了你的输入：${userInput}`;
}

try {
  const userInput = await terminal.question('你：');

  if (!userInput.trim()) {
    console.log('模拟 Agent：请输入一些内容。');
  } else {
    console.log(`模拟 Agent：${runMockAgent(userInput.trim())}`);
  }
} finally {
  terminal.close();
}
