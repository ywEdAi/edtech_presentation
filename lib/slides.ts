// lib/slides.ts
export type Slide = {
    id: number
    title: string
    content: {
      heading: string
      layout?: 'default' | 'two-column' | 'narrative' | 'summary' | 'contrast'
      bullets: Array<
        | string
        | {
            bullet: string
            subBullets?: string[]
          }
      >
    }
    images?: string[] // Optional images for future use
  }
  
  
  export const slides: Slide[] = [
    {
        id: 1,
        title: '',
        content: {
          heading: '独立开发与小团队在 AI+教育中的创新实践',
          layout: 'narrative', // Explicitly set layout for cover slide
          bullets: [
            '技术 × 教育学：用 TPACK 框架赋能生成式 AI 时代',
            '从产品开发模式到"知识审美"的教育思考',
            {
              bullet: '伊伊子',
              subBullets: ['小红书/公众号/Youtube:爱思考的伊伊子','小宇宙/Apple Podcast/Spotify: 教育AI智造者'],
            },
          ],
        },
      },
      {
        id: 2,
        title: ' 议程 / Agenda',
        content: {
          heading: '',
          layout: 'summary', // Explicitly set layout for agenda slide
          bullets: [
            '引言与背景：AI 与教育的交汇',
            {
              bullet: '技术与教育学的结合',
              subBullets: ['TPACK 框架', 'TPACK 在 GenAI 时代的应用'],
            },
            {
              bullet: '产品开发关键模式与市场演变',
              subBullets: [
                '技术驱动 vs. 数据驱动',
                '小团队 vs. 大团队',
                '个人需求驱动 vs. 市场调研驱动',
                '"套壳"短期效应 vs. 长期价值',
                'Pre-PMF 阶段的挑战与策略',
              ],
            },
            '知识审美：AI 时代的教育哲思',
            '人文与思维的发散性讨论（四组对照）',
            '总结与 Q&A',
          ],
        },
      },
    {
      id: 3,
      title: 'AI 与教育的交汇',
      content: {
        heading: '',
        bullets: [
          {
            bullet: 'AI 在教育：寒武纪大爆发',
            subBullets: [
              '大模型（如 ChatGPT）加速落地教学场景',
              '备课、答疑、个性化学习等应用层出不穷',
            ],
          },
          {
            bullet: '关注“小团队 / 独立开发者”的原因',
            subBullets: [
              '技术门槛降低：开源大模型、云服务便捷集成',
              '细分场景与创新速度：灵活抢占市场空缺',
            ],
          },
        ],
      },
    },
    {
      id: 4,
      title: '技术与教育学的结合：TPACK 框架',
      content: {
        heading: '',
        bullets: [
          {
            bullet: 'TPACK 三大核心要素：',
            subBullets: [
              'T: Technological Knowledge（技术知识）',
              'P: Pedagogical Knowledge（教学法知识）',
              'C: Content Knowledge（学科内容知识）',
            ],
          },
          '核心理念：三者交融，共同构建有深度且有温度的教育应用',
          
        ],
      },
      images: ["public/TPACK.png"]
      
    },
    {
      id: 5,
      title: ' TPACK 在 GenAI 时代的应用',
      content: {
        heading: '',
        bullets: [
          {
            bullet: 'GenAI 应用场景',
            subBullets: [
              '对话式大模型 + 教学设计（利用 Prompt Engineering 与思维链实现启发式引导）',
              '知识图谱 + 学科概念（降低大模型“幻觉”，确保知识准确性）',
              '示例：将 AI 定位为“助教”而非“代写者”',
            ],
          },
          '目标：兼顾个性化与深度学习',
        ],
      },
    },
    {
        id: 6,
        title: '产品开发关键模式 (1)：个人需求驱动 vs. 市场调研驱动',
        content: {
          heading: '真实痛点最终回归教育本质',
          layout: 'contrast', 
          bullets: [
            {
              bullet: '个人需求驱动：',
              subBullets: [
                '基于创始人自身痛点（教师、家长、学生）开发',
                '使命感强，贴合真实场景',
                '风险：易局限于小圈子，存在自嗨式开发',
              ],
            },
            {
              bullet: '市场调研驱动：',
              subBullets: [
                '依靠广泛用户反馈与数据验证',
                '确保产品与市场契合（PMF）',
                '风险：投入大，验证周期长',
              ],
            }
          ],
        },
      },
    {
      id: 7,
      title: '产品开发关键模式 (2)：技术驱动 vs. 数据驱动',
      content: {
        heading: '技术引领与数据决策：创新模式的抉择',
        layout: 'contrast', 
        bullets: [
          {
            bullet: '技术驱动：',
            subBullets: [
              '由 AI 专家/工程师主导',
              '先研究前沿模型，再匹配教育场景',
              '优势：算法领先、功能创新',
              '挑战：场景契合度、用户教育认同',
            ],
          },
          {
            bullet: '数据驱动：',
            subBullets: [
              '基于海量题库与学生作答数据',
              '数据优势决定产品精准性与定制化',
              '曾是大机构独占优势，但大模型时代壁垒逐渐弱化',
            ],
          },
        ],
      },
    },
    {
      id: 8,
      title: '产品开发关键模式 (3)：小团队 vs. 大团队',
      content: {
        heading: '从灵活迭代到资源整合：不同规模战略的博弈',
        layout: 'contrast', 
        bullets: [
          {
            bullet: '小团队/创业公司：',
            subBullets: [
              '规模精简、决策迅速',
              '追求“快速迭代”与 MVP 上线',
              '借助套壳大模型抢占细分领域',
              '风险：资金有限、易被复制或收编',
            ],
          },
          {
            bullet: '大团队/大公司：',
            subBullets: [
              '拥有雄厚资金与庞大用户基础',
              '采用合作研发/自研模型及全家桶生态',
              '优势：资源整合、大规模推广',
              '问题：创新节奏较慢、审批流程冗长',
            ],
          },
        ],
      },
    },
 
    {
      id: 9,
      title: '“套壳”产品：短期效应 vs. 长期价值',
      content: {
        heading: '',
        bullets: [
          '“套壳”定义：直接调用现成大模型，包装以场景化 UI',
          {
            bullet: '短期优势：',
            subBullets: ['快速上线、抢占先机', '研发成本低'],
          },
          {
            bullet: '长期挑战：',
            subBullets: ['护城河不深，易被复制', '需深度融合教育内容及自研技术'],
          },
          '演变路径：先套壳 → 获用户与需求验证 → 再深耕内容、算法与交互',
        ],
      },
    },
    {
      id: 10,
      title: '初创公司 Pre-PMF 阶段：挑战与策略',
      content: {
        heading: '',
        bullets: [
          {
            bullet: '定位难：',
            subBullets: [
              '学校、培训机构、家长、学生群体诉求各异',
              '建议：小范围试点，快速获取真实反馈',
            ],
          },
          {
            bullet: '资源有限：',
            subBullets: ['小团队人少钱少', '建议：聚焦核心功能，做到极致'],
          },
          {
            bullet: '竞争激烈：',
            subBullets: [
              '同质化严重，需独特数据、渠道或技术',
              '建议：双轨策略——传统业务产生现金流反哺 AI 产品迭代',
            ],
          },
        ],
      },
    },
    {
      id: 11,
      title: '知识审美：AI 时代的教育哲思',
      content: {
        heading: '',
        layout: 'summary', 
        bullets: [
          '核心问题：当 AI 可批量生成信息时，人类为何还要学习？',
          {
            bullet: '知识审美定义：',
            subBullets: [
              '对智力成就或思想创造的感知与欣赏',
              '不仅掌握功能，更体验背后逻辑、意境与结构之美',
            ],
          },
          {
            bullet: '重要性：',
            subBullets: [
              '在功利学习稀释时，热爱与钻研者更闪耀',
              'AI 无法替代人类对美感与深度思考的体悟',
            ],
          },
        ],
      },
    },
    {
      id: 12,
      title: '教育本质：以人为本',
      content: {
        heading: '',
        bullets: [
          '关注学生内心与学习情感',
          '深度教学设计',
          '批判思维与创造力培养',
          '对知识的尊重与热爱',
          '若只追求效率，易陷浅层；坚守审美，则 AI+教育更有温度与灵魂',
        ],
      },
    },
    {
        id: 13,
        title: '人文与思维的发散性讨论（概览）',
        content: {
          heading: '',
          layout: 'summary', // Explicitly set layout for overview slide
          bullets: [
            {
              bullet: '四组核心对照：',
              subBullets: [
                '乐观者 vs. 悲观者',
                'Researcher vs. Engineer',
                '痛苦教育 vs. 快乐教育',
                '黑暗森林法则：低调潜行 vs. 借势爆发',
              ],
            },
          ],
        },
      },
      {
        id: 14,
        title: ' (1) 乐观者 vs. 悲观者',
        content: {
          heading: '平衡点：怀抱激情同时保持清醒，先做 Demo，再迭代优化',
          layout: 'contrast', // Explicitly set layout for comparison slide
          bullets: [
            {
              bullet: '乐观者：',
              subBullets: ['相信 AI 能重塑教育公平，扩充教学资源', '策略："先行动，再优化"'],
            },
            {
              bullet: '悲观者：',
              subBullets: ['担心 AI 让学生失去独立思考，教师被替代', '策略："问题太多，也懒得折腾"'],
            }
          ],
        },
      },
    {
      id: 15,
      title: '(2) Researcher vs. Engineer',
      content: {
        heading: '互补优势：研究者提供可信度，工程师促使成果落地规模化',
        bullets: [
          {
            bullet: '研究者：',
            subBullets: ['追求严谨，重视统计显著性与可控实验', '慎重迭代，倾向长周期验证'],
          },
          {
            bullet: '工程师：',
            subBullets: ['关注用户留存与商业可行性，追求快速上线', '接受一定混沌与不完美'],
          }
        ],
      },
    },
    {
      id: 16,
      title: '(3) 痛苦教育 vs. 快乐教育',
      content: {
        heading: 'AI 的作用：解放重复劳动，激发思维创新，同时防范“一键作业”风险',
        layout:'contrast',
        bullets: [
          {
            bullet: '痛苦教育：',
            subBullets: ['依赖艰苦训练、刷题确保成绩', '担心 AI 导致学生偷懒'],
          },
          {
            bullet: '快乐教育：',
            subBullets: ['强调兴趣激发、游戏化与项目式学习', '但无挑战则学习深度受限'],
          }
        ],
      },
    },
    {
      id: 17,
      title: '(4) 黑暗森林法则：低调潜行 vs. 借势爆发',
      content: {
        heading: '关键：审时度势，既保护核心技术又注重开放合作',
        bullets: [
          {
            bullet: '低调潜行：',
            subBullets: ['担心被大公司抄袭，选择小范围打磨产品', '构建忠实用户社群'],
          },
          {
            bullet: '借势爆发：',
            subBullets: ['高调宣传抢占市场、吸引投资与用户', '符合教育公益属性，助力更多师生'],
          }
        ],
      },
    },
    {
        id: 18,
        title: '总结 & Q&A',
        content: {
          heading: '',
          layout: 'summary', // Explicitly set layout for conclusion slide
          bullets: [
            {
              bullet: '结语要点：',
              subBullets: [
                'AI 赋能教育：从寒武纪大爆发到理性深耕',
                'TPACK 模型：技术 × 教学法 × 学科内容缺一不可',
                '产品开发路径：从"套壳"快跑到深度融合，聚焦真实需求',
                '知识审美：在信息泛滥时代守住教育灵魂',
                '人文思辨：在多组对照中寻求平衡',
              ],
            },
            '结束语： "教育的核心，永远是对人的关怀与启迪。AI 只是工具，看我们如何使用它。"',
          ],
        },
      },
  ]
  