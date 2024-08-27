class LocalData {
  getInfo() {
    return {
      id: 'localstorage',
      name: '本地存储',
      blocks: [
	{
          opcode: 'support',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '支持本地存储空间？',
	 disableMonitor: true,
        },

 	{
          opcode: 'getALL',
          blockType: Scratch.BlockType.REPORTER,
          text: '所有本地存储的键',
	 disableMonitor: true,
        },

        '---',

	{
          opcode: 'nonull',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '本地存储存在键 [KEY]？',
	  disableMonitor: true,
	  arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "用户名",
            },
          },
        },

        {
          opcode: 'get',
          blockType: Scratch.BlockType.REPORTER,
          text: '本地存储键 [KEY] 的值',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "用户名",
            },
          },
        },

        {
            opcode: "set",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("设置本地存储键 [KEY] 值为 [VALUE]"),
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("用户名"),
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "player",
              },
            },
          },

	{
            opcode: "remove",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("删除本地存储键 [KEY] 的值"),
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("用户名"),
              },
            },
          },

        '---',

	{
            opcode: "clear",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("清空本地存储"),
          }


      ]
    };
  }
support() {
    	localStorage.setItem('写入测试', 'testValue');
	let getTestValue = localStorage.getItem('写入测试');
	localStorage.removeItem('写入测试');
	return getTestValue === 'testValue';
  }

nonull(args){
	return localStorage.getItem(args.KEY) !== null;
}
get(args) {
	return localStorage.getItem(args.KEY);
  }

getALL(args) {
	return JSON.stringify(Object.keys(localStorage), null);
  }

set(args) {
	localStorage.setItem(args.KEY, args.VALUE);
   }

remove(args) {
	localStorage.removeItem(args.KEY);
   }

clear( ) {
	localStorage.clear();
   }

}
Scratch.extensions.register(new LocalData());