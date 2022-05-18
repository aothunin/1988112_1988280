'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    let data = [
    {
      "description": "Cras non",
      "productId": 1,
      "specificationId": 1
    }, {
      "description": "In hac",
      "productId": 1,
      "specificationId": 2
    }, {
      "description": "In hac. ",
      "productId": 1,
      "specificationId": 3
    }, {
      "description": "Sed",
      "productId": 2,
      "specificationId": 4
    }, {
      "description": "Pellent nunc. ",
      "productId": 2,
      "specificationId": 5
    }, {
      "description": "Etiam f",
      "productId": 2,
      "specificationId": 6
    }, {
      "description": "id s, nisl. ",
      "productId": 3,
      "specificationId": 7
    }, {
      "description": "nisl. ",
      "productId": 3,
      "specificationId": 8
    },
    {
      "description": "2 ras non",
      "productId": 3,
      "specificationId": 9
    }, {
      "description": "id s, nisl. ",
      "productId": 4,
      "specificationId": 10
    }, {
      "description": "nisl. ",
      "productId": 4,
      "specificationId": 11
    }, {
      "description": "2 ras non",
      "productId": 4,
      "specificationId": 12
    }, {
      "description": "id s, nisl. ",
      "productId": 5,
      "specificationId": 13
    }, {
      "description": "nisl. ",
      "productId": 5,
      "specificationId": 14
    },
    {
      "description": "2 ras non",
      "productId": 5,
      "specificationId": 15
    }, {
      "description": "id s, nisl. ",
      "productId": 6,
      "specificationId": 16
    }, {
      "description": "nisl. ",
      "productId": 6,
      "specificationId": 17
    },
    {
      "description": "2 ras non",
      "productId": 6,
      "specificationId": 18
    }, {
      "description": "id s, nisl. ",
      "productId": 7,
      "specificationId": 19
    }, {
      "description": "nisl. ",
      "productId": 7,
      "specificationId": 20
    },
    {
      "description": "2 ras non",
      "productId": 7,
      "specificationId": 21
    }, {
      "description": "id s, nisl. ",
      "productId": 8,
      "specificationId": 22
    }, {
      "description": "nisl. ",
      "productId": 8,
      "specificationId": 23
    }, {
      "description": "2 ras non",
      "productId": 8,
      "specificationId": 24
    }, {
      "description": "id s, nisl. ",
      "productId": 9,
      "specificationId": 25
    }, {
      "description": "nisl. ",
      "productId": 9,
      "specificationId": 26
    },  {
      "description": "2 ras non",
      "productId": 9,
      "specificationId": 27
    }, {
      "description": "id s, nisl. ",
      "productId": 10,
      "specificationId": 28
    }, {
      "description": "nisl. ",
      "productId": 10,
      "specificationId": 29
    },  {
      "description": "2 ras non",
      "productId": 10,
      "specificationId": 30
    }, {
      "description": "id s, nisl. ",
      "productId": 11,
      "specificationId": 31
    }, {
      "description": "nisl. ",
      "productId": 11,
      "specificationId": 32
    }, {
      "description": "2 ras non",
      "productId": 11,
      "specificationId": 33
    }, {
      "description": "id s, nisl. ",
      "productId": 12,
      "specificationId": 34
    }, {
      "description": "nisl. ",
      "productId": 12,
      "specificationId": 35
    },  {
      "description": "2 ras non",
      "productId": 12,
      "specificationId": 36
    }, {
      "description": "id s, nisl. ",
      "productId": 13,
      "specificationId": 37
    }, {
      "description": "nisl. ",
      "productId": 13,
      "specificationId": 38
    }, {
      "description": "2 ras non",
      "productId": 13,
      "specificationId": 39
    }, {
      "description": "id s, nisl. ",
      "productId": 14,
      "specificationId": 40
    }, {
      "description": "nisl. ",
      "productId": 14,
      "specificationId": 41
    }, {
      "description": "2 ras non",
      "productId": 14,
      "specificationId": 42
    }, {
      "description": "id s, nisl. ",
      "productId": 15,
      "specificationId": 43
    }, {
      "description": "nisl. ",
      "productId": 15,
      "specificationId": 44
    }, {
      "description": "2 ras non",
      "productId": 15,
      "specificationId": 45
    }, {
      "description": "id s, nisl. ",
      "productId": 16,
      "specificationId": 46
    }, {
      "description": "nisl. ",
      "productId": 16,
      "specificationId": 47
    }, {
      "description": "2 ras non",
      "productId": 16,
      "specificationId": 48
    }, {
      "description": "2 ras non",
      "productId": 17,
      "specificationId": 49 
    }, {
      "description": "2 ras non",
      "productId": 17,
      "specificationId": 50
    }, {
      "description": "2 ras non",
      "productId": 17,
      "specificationId": 51
    }, {
      "description": "2 ras non",
      "productId": 18,
      "specificationId": 52
    }, {
      "description": "2 ras non",
      "productId": 18,
      "specificationId": 53
    }, {
      "description": "2 ras non",
      "productId": 18,
      "specificationId": 54
    }, {
      "description": "2 ras non",
      "productId": 19,
      "specificationId": 55
    }, {
      "description": "2 ras non",
      "productId": 19,
      "specificationId": 56
    }, {
      "description": "2 ras non",
      "productId": 19,
      "specificationId": 57
    }, {
      "description": "2 ras non",
      "productId": 20,
      "specificationId": 58
    }, {
      "description": "2 ras non",
      "productId": 20,
      "specificationId": 59
    }, {
      "description": "2 ras non",
      "productId": 20,
      "specificationId": 60
    }, {
      "description": "2 ras non",
      "productId": 21,
      "specificationId": 61
    }, {
      "description": "2 ras non",
      "productId": 21,
      "specificationId": 62
    }, {
      "description": "2 ras non",
      "productId": 21,
      "specificationId": 63
    }, {
      "description": "2 ras non",
      "productId": 22,
      "specificationId": 64
    }, {
      "description": "2 ras non",
      "productId": 22,
      "specificationId": 65
    }, {
      "description": "2 ras non",
      "productId": 22,
      "specificationId": 66
    }, {
      "description": "2 ras non",
      "productId": 23,
      "specificationId": 67
    }, {
      "description": "2 ras non",
      "productId": 23,
      "specificationId": 68
    }, {
      "description": "2 ras non",
      "productId": 23,
      "specificationId": 69
    }, {
      "description": "2 ras non",
      "productId": 24,
      "specificationId": 70
    }, {
      "description": "2 ras non",
      "productId": 24,
      "specificationId": 71
    }, {
      "description": "2 ras non",
      "productId": 24,
      "specificationId": 72
    }, {
      "description": "2 ras non",
      "productId": 25,
      "specificationId": 73
    },  {
      "description": "2 ras non",
      "productId": 25,
      "specificationId": 74
    },  {
      "description": "2 ras non",
      "productId": 25,
      "specificationId": 75
    }, {
      "description": "2 ras non",
      "productId": 26,
      "specificationId": 76
    }, {
      "description": "2 ras non",
      "productId": 26,
      "specificationId": 77
    }, {
      "description": "2 ras non",
      "productId": 26,
      "specificationId": 78
    }, {
      "description": "2 ras non",
      "productId": 27,
      "specificationId": 79
    },  {
      "description": "2 ras non",
      "productId": 27,
      "specificationId": 80
    }, {
      "description": "2 ras non",
      "productId": 27,
      "specificationId": 81
    }, {
      "description": "2 ras non",
      "productId": 28,
      "specificationId": 82
    }, {
      "description": "2 ras non",
      "productId": 28,
      "specificationId": 83
    }, {
      "description": "2 ras non",
      "productId": 28,
      "specificationId": 84
    }, {
      "description": "2 ras non",
      "productId": 29,
      "specificationId": 85
    }, {
      "description": "2 ras non",
      "productId": 29,
      "specificationId": 86
    }, {
      "description": "2 ras non",
      "productId": 29,
      "specificationId": 87
    }, {
      "description": "2 ras non",
      "productId": 30,
      "specificationId": 88
    }, {
      "description": "2 ras non",
      "productId": 30,
      "specificationId": 89
    }, {
      "description": "2 ras non",
      "productId": 30,
      "specificationId": 90
    }, {
      "description": "2 ras non",
      "productId": 31,
      "specificationId": 91
    }, {
      "description": "2 ras non",
      "productId": 31,
      "specificationId": 92
    }, {
      "description": "2 ras non",
      "productId": 31,
      "specificationId": 93
    }, {
      "description": "2 ras non",
      "productId": 32,
      "specificationId": 94
    }, {
      "description": "2 ras non",
      "productId": 32,
      "specificationId": 95
    }, {
      "description": "2 ras non",
      "productId": 32,
      "specificationId": 96
    }
    , {
      "description": "2 ras non",
      "productId": 33,
      "specificationId": 97
    }, {
      "description": "2 ras non",
      "productId": 33,
      "specificationId": 98
    }, {
      "description": "2 ras non",
      "productId": 33,
      "specificationId": 99
    }, {
      "description": "2 ras non",
      "productId": 34,
      "specificationId": 100
    }, {
      "description": "2 ras non",
      "productId": 34,
      "specificationId": 101
    }, {
      "description": "2 ras non",
      "productId": 34,
      "specificationId": 102
    }, {
      "description": "2 ras non",
      "productId": 35,
      "specificationId": 103
    }, {
      "description": "2 ras non",
      "productId": 35,
      "specificationId": 104
    }, {
      "description": "2 ras non",
      "productId": 35,
      "specificationId": 105
    }, {
      "description": "2 ras non",
      "productId": 36,
      "specificationId": 106
    }, {
      "description": "2 ras non",
      "productId": 36,
      "specificationId": 107
    }, {
      "description": "2 ras non",
      "productId": 36,
      "specificationId": 108
    }, {
      "description": "2 ras non",
      "productId": 37,
      "specificationId": 109
    }, {
      "description": "2 ras non",
      "productId": 37,
      "specificationId": 110
    }, {
      "description": "2 ras non",
      "productId": 37,
      "specificationId": 111
    }, {
      "description": "2 ras non",
      "productId": 38,
      "specificationId": 112
    }, {
      "description": "2 ras non",
      "productId": 38,
      "specificationId": 113
    }, {
      "description": "2 ras non",
      "productId": 38,
      "specificationId": 114
    }, {
      "description": "2 ras non",
      "productId": 39,
      "specificationId": 115
    }, {
      "description": "2 ras non",
      "productId": 39,
      "specificationId": 116
    }, {
      "description": "2 ras non",
      "productId": 39,
      "specificationId": 117
    }, {
      "description": "2 ras non",
      "productId": 40,
      "specificationId": 118
    }, {
      "description": "2 ras non",
      "productId": 40,
      "specificationId": 119
    }, {
      "description": "2 ras non",
      "productId": 40,
      "specificationId": 120
    }, {
      "description": "2 ras non",
      "productId": 41,
      "specificationId": 121
    }, {
      "description": "2 ras non",
      "productId": 41,
      "specificationId": 122
    }, {
      "description": "2 ras non",
      "productId": 41,
      "specificationId": 123
    }, {
      "description": "2 ras non",
      "productId": 42,
      "specificationId": 124
    }, {
      "description": "2 ras non",
      "productId": 42,
      "specificationId": 125
    }, {
      "description": "2 ras non",
      "productId": 42,
      "specificationId": 126
    }, {
      "description": "2 ras non",
      "productId": 43,
      "specificationId": 127
    }, {
      "description": "2 ras non",
      "productId": 43,
      "specificationId": 128
    }, {
      "description": "2 ras non",
      "productId": 43,
      "specificationId": 129
    }, {
      "description": "2 ras non",
      "productId": 44,
      "specificationId": 130
    }, {
      "description": "2 ras non",
      "productId": 44,
      "specificationId": 131
    }, {
      "description": "2 ras non",
      "productId": 44,
      "specificationId": 132
    }, {
      "description": "2 ras non",
      "productId": 45,
      "specificationId": 133
    }, {
      "description": "2 ras non",
      "productId": 45,
      "specificationId": 134
    }, {
      "description": "2 ras non",
      "productId": 45,
      "specificationId": 135
    }, {
      "description": "2 ras non",
      "productId": 46,
      "specificationId": 136
    }, {
      "description": "2 ras non",
      "productId": 46,
      "specificationId": 137
    }, {
      "description": "2 ras non",
      "productId": 46,
      "specificationId": 138
    }, {
      "description": "2 ras non",
      "productId": 47,
      "specificationId": 139
    }, {
      "description": "2 ras non",
      "productId": 47,
      "specificationId": 140
    }, {
      "description": "2 ras non",
      "productId": 47,
      "specificationId": 141
    }, {
      "description": "2 ras non",
      "productId": 48,
      "specificationId": 142
    }, {
      "description": "2 ras non",
      "productId": 48,
      "specificationId": 143
    }, {
      "description": "2 ras non",
      "productId": 48,
      "specificationId": 144
    },
    {
      "description": "2 ras non",
      "productId": 49,
      "specificationId": 145
    }, {
      "description": "2 ras non",
      "productId": 49,
      "specificationId": 146
    }, {
      "description": "2 ras non",
      "productId": 49,
      "specificationId": 147
    }, {
      "description": "2 ras non",
      "productId": 50,
      "specificationId": 148
    }, {
      "description": "2 ras non",
      "productId": 50,
      "specificationId": 149
    }, {
      "description": "2 ras non",
      "productId": 50,
      "specificationId": 150
    }, {
      "description": "2 ras non",
      "productId": 51,
      "specificationId": 151
    }, {
      "description": "2 ras non",
      "productId": 51,
      "specificationId": 152
    }, {
      "description": "2 ras non",
      "productId": 51,
      "specificationId": 153
    }, {
      "description": "2 ras non",
      "productId": 52,
      "specificationId": 154
    }, {
      "description": "2 ras non",
      "productId": 52,
      "specificationId": 155
    }, {
      "description": "2 ras non",
      "productId": 52,
      "specificationId": 156
    }, {
      "description": "2 ras non",
      "productId": 53,
      "specificationId": 157
    }, {
      "description": "2 ras non",
      "productId": 53,
      "specificationId": 158
    }, {
      "description": "2 ras non",
      "productId": 53,
      "specificationId": 159
    }, {
      "description": "2 ras non",
      "productId": 54,
      "specificationId": 160
    }, {
      "description": "2 ras non",
      "productId": 54,
      "specificationId": 161
    }, {
      "description": "2 ras non",
      "productId": 54,
      "specificationId": 162
    }, {
      "description": "2 ras non",
      "productId": 55,
      "specificationId": 163
    }, {
      "description": "2 ras non",
      "productId": 55,
      "specificationId": 164
    }, {
      "description": "2 ras non",
      "productId": 55,
      "specificationId": 165
    }, {
      "description": "2 ras non",
      "productId": 56,
      "specificationId": 166
    }, {
      "description": "2 ras non",
      "productId": 56,
      "specificationId": 167
    }, {
      "description": "2 ras non",
      "productId": 56,
      "specificationId": 168
    }, {
      "description": "2 ras non",
      "productId": 57,
      "specificationId": 169
    }, {
      "description": "2 ras non",
      "productId": 57,
      "specificationId": 170
    }, {
      "description": "2 ras non",
      "productId": 57,
      "specificationId": 171
    }, {
      "description": "2 ras non",
      "productId": 58,
      "specificationId": 172
    }, {
      "description": "2 ras non",
      "productId": 58,
      "specificationId": 173
    }, {
      "description": "2 ras non",
      "productId": 58,
      "specificationId": 174
    }, {
      "description": "2 ras non",
      "productId": 59,
      "specificationId": 175
    }, {
      "description": "2 ras non",
      "productId": 59,
      "specificationId": 176
    }, {
      "description": "2 ras non",
      "productId": 59,
      "specificationId": 177
    }, {
      "description": "2 ras non",
      "productId": 60,
      "specificationId": 178
    }, {
      "description": "2 ras non",
      "productId": 60,
      "specificationId": 179
    }, {
      "description": "2 ras non",
      "productId": 60,
      "specificationId": 180
    }, {
      "description": "2 ras non",
      "productId": 61,
      "specificationId": 181
    }, {
      "description": "2 ras non",
      "productId": 61,
      "specificationId": 182
    }, {
      "description": "2 ras non",
      "productId": 61,
      "specificationId": 183
    }, {
      "description": "2 ras non",
      "productId": 62,
      "specificationId": 184
    }, {
      "description": "2 ras non",
      "productId": 62,
      "specificationId": 185
    }, {
      "description": "2 ras non",
      "productId": 62,
      "specificationId": 186
    }, {
      "description": "2 ras non",
      "productId": 63,
      "specificationId": 187
    }, {
      "description": "2 ras non",
      "productId": 63,
      "specificationId": 188
    }, {
      "description": "2 ras non",
      "productId": 63,
      "specificationId": 189
    }, {
      "description": "2 ras non",
      "productId": 64,
      "specificationId": 190
    }, {
      "description": "2 ras non",
      "productId": 64,
      "specificationId": 191
    }, {
      "description": "2 ras non",
      "productId": 64,
      "specificationId": 192
    }


  ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
     await queryInterface.bulkInsert('ProductSpecifications', data, {});
  },
  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('ProductSpecifications', null, {});
  }
};
