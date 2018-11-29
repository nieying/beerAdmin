export const menuJson = [
  {
    id: "1",
    icon: "global",
    key: "/network",
    name: "网络管理",
    subs: []
  },
  {
    id: "2",
    icon: "solution",
    key: "/program",
    name: "节目投票",
    subs: []
  },
  {
    id: "3",
    icon: "gift",
    key: "/lottery",
    name: "抽奖管理",
    subs: [
      { id: "3-1", key: "/lottery/normal", name: "抽奖", icon: "" },
      { id: "3-2", key: "/lottery/append", name: "追加抽奖", icon: "" },
      { id: "3-3", key: "/lottery/integral", name: "积分抽奖", icon: "" },
      { id: "3-4", key: "/lottery/shake", name: "摇摇杯抽奖", icon: "" }
    ]
  },
  {
    id: "4",
    icon: "alert",
    key: "/lighting",
    name: "灯光管理",
    subs: [
      { id: "3-0", key: "/lighting/list", name: "灯光列表", icon: "" },
      { id: "3-1", key: "/lighting/add-gateway", name: "新增网关灯光", icon: "" },
      { id: "3-2", key: "/lighting/add-wine", name: "新增酒桌灯光", icon: "" },
      { id: "3-3", key: "/lighting/entry-wine", name: "录入酒桌", icon: "" }
    ]
  },
  {
    id: "5",
    icon: "credit-card",
    key: "/sign-in",
    name: "签到",
    subs: []
  }
];
