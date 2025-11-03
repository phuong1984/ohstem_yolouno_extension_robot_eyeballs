var eyeballsColor = '#5d2c91';

var pupilDirection = [
  ["chính giữa", "0"],
  ["hướng Bắc", "1"],
  ["hướng Đông Bắc", "2"],
  ["hướng Đông", "3"],
  ["hướng Đông Nam", "4"],
  ["hướng Nam", "5"],
  ["hướng Tây Nam", "6"],
  ["hướng Tây", "7"],
  ["hướng Tây Bắc", "8"]
];

var scrollDirections = [
  ["trái", "'left'"],
  ["phải", "'right'"],
  ["lên", "'up'"],
  ["xuống", "'down'"]
];

var textEyeExpressions = [
  ["khóc", "0"],
  ["đau buồn", "1"],
  ["giận dữ", "2"],
  ["điên", "3"],
  ["đeo kính", "4"],  
  ["ngủ", "5"],
  ["chớp mắt lên", "6"],
  ["mệt mỏi", "7"],
  ["nhìn đêm", "8"],
  ["nhướn mày lên", "9"],
  ["nhướn mày xuống", "10"],
];
var imageEyeExpressions = [
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/0.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "0"
  ],
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/1.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "1"
  ],
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/2.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "2"
  ],
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/3.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "3"
  ],
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/4.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "4"
  ],
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/5.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "5"
  ],
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/6.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "6"
  ],
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/7.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "7"
  ],
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/8.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "8"
  ],
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/9.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "9"
  ],
  [
    {
      "src": "https://raw.githubusercontent.com/phuong1984/ohstem_yolouno_extension_robot_eyeballs/refs/heads/main/images/10.bmp",
      "width": 30,
      "height": 15,
      "alt": ""
    },
    "10"
  ]
];

Blockly.Blocks['eyeballs_create'] = {
  init: function () {
    this.jsonInit({
      colour: eyeballsColor,
      tooltip: 'Khởi tạo cặp mắt cho robot trong màn hình oled 0.96 inch - 128x64 pixels',
      message0: 'Khởi tạo cặp mắt robot trong màn hình oled',
      args0: [
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: '',
    });
  }
};

Blockly.Python['eyeballs_create'] = function (block) {
  Blockly.Python.definitions_['import_roboeyes'] = 'from eyeballs import *';
  Blockly.Python.definitions_['init_roboeyes'] = 'eyeballs = EyeBalls()';
  return '';
};

Blockly.Blocks['eyeballs_draw_eyes'] = {
  init: function () {
    this.jsonInit({
      "type": "eyeballs_draw_eyes",
      "message0": "Vẽ mắt tại: x1 %1 y1 %2 x2 %3 y2 %4 hướng mắt trái %5 hướng mắt phải %6", 
      "args0": [
        {
          "type": "input_value",
          "name": "X1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "Y1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "X2",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "Y2",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "LEFT_DIR",
          "options": pupilDirection
        },
        {
          "type": "field_dropdown",
          "name": "RIGHT_DIR",
          "options": pupilDirection
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": eyeballsColor,
      "tooltip": "Vẽ mắt tại vị trí và vẽ hướng nhìn của mắt",
      "helpUrl": ""
    });
  }
};

Blockly.Python['eyeballs_draw_eyes'] = function (block) {
  var x1 = Blockly.Python.valueToCode(block, 'X1', Blockly.Python.ORDER_ATOMIC);
  var y1 = Blockly.Python.valueToCode(block, 'Y1', Blockly.Python.ORDER_ATOMIC);
  var x2 = Blockly.Python.valueToCode(block, 'X2', Blockly.Python.ORDER_ATOMIC);
  var y2 = Blockly.Python.valueToCode(block, 'Y2', Blockly.Python.ORDER_ATOMIC);
  var left_dir = block.getFieldValue('LEFT_DIR');
  var right_dir = block.getFieldValue('RIGHT_DIR');
  return 'eyeballs.draw_eyes(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ', ' + left_dir + ', ' + right_dir + ')\n';
};

Blockly.Blocks['eyeballs_animate_eyes'] = {
  init: function () {
    this.jsonInit({
      "type": "eyeballs_animate_eyes",
      "message0": "Chuyển động hướng nhìn của mắt",
      "args0": [
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": eyeballsColor,
      "tooltip": "Chuyển động hướng nhìn của mắt ngẫu nhiên ",
      "helpUrl": ""
    });
  }
};

Blockly.Python['eyeballs_animate_eyes'] = function (block) {
  return 'eyeballs.animate_eyes()\n';
};

Blockly.Blocks['eyeballs_draw_eyes_expression'] = {
  init: function () {
    this.jsonInit({
      "type": "eyeballs_draw_eyes_expression",
      "message0": "Vẽ biểu cảm của mắt %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EXPRESSION",
          "options": imageEyeExpressions
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": eyeballsColor,
      "tooltip": "Vẽ biểu cảm của mắt - chọn hình",
      "helpUrl": ""
    });
  }
};

Blockly.Python['eyeballs_draw_eyes_expression'] = function (block) {
  var index = block.getFieldValue('EXPRESSION');
  return 'eyeballs.draw_eyes_expression(' + index + ')\n';
};

Blockly.Blocks['eyeballs_scroll_image'] = {
  init: function () {
    this.jsonInit({
      "type": "eyeballs_scroll_image",
      "message0": "Chuyển động cuộn của biểu cảm %1 theo hướng %2 một đoạn (pixels) %3 trong khoảng thời gian (giây) %4",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EXPRESSION",
          "options": imageEyeExpressions
        },
        {
          "type": "field_dropdown",
          "name": "DIRECTION",
          "options": scrollDirections
        },
        {
          "type": "input_value",
          "name": "STEPS",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "DELAY",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": eyeballsColor,
      "tooltip": "Chuyển động cuộn biểu cảm của mắt - chọn hình, hướng di chuyển, tốc độ",
      "helpUrl": ""
    });
  }
};

Blockly.Python['eyeballs_scroll_image'] = function (block) {
  var index = block.getFieldValue('EXPRESSION');
  var direction = block.getFieldValue('DIRECTION');
  var steps = Blockly.Python.valueToCode(block, 'STEPS', Blockly.Python.ORDER_ATOMIC);
  var delay = Blockly.Python.valueToCode(block, 'DELAY', Blockly.Python.ORDER_ATOMIC);
  return 'eyeballs.scroll_image(' + index + ', ' + direction + ', ' + steps + ', ' + delay + ')\n';
};
