module.exports = {
  robot: {
    cwd: './robots/robot-test',
    skills: {
      Facebook: {
        methods: {
          like: {
            callback: (data, task) => {

            }
          }
        }
      }
    },
    devices: [
      {
        name: "firefox",
        path: 'C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe',
        profile: 'C:\\Users\\keff\\Desktop\\cosas\\RobotData\\firefox-profile'
      }
    ]
  }
};