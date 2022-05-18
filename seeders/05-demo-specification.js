'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    let data = [
    {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    },

    {
      "name": "Chuyên dùng cho",
      "summary": "Chạy bộ"
    }, {
      "name": "Kích thước",
      "summary": "41"
    }, {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },

    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
  
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, 
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },
    {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },{
      "name": "Chuyên dùng cho",
      "summary": "Tập gym"
    }, {
      "name": "Kích thước",
      "summary": "39"
    }
    , {
      "name": "Xuất xứ",
      "summary": "Trung Quốc"
    },

  
    {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    }, {
      "name": "Chuyên dùng cho",
      "summary": "Đi bộ"
    }, {
      "name": "Kích thước",
      "summary": "42"
    }, {
      "name": "Xuất xứ",
      "summary": "Việt nam"
    },
  
  ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
     await queryInterface.bulkInsert('Specifications', data, {});
  },
  async down (queryInterface, Sequelize) {

    
      await queryInterface.bulkDelete('Specifications', null, {});
  }
};
