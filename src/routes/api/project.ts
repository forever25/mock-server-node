/*
 * @Author: ZWS
 * @Date: 2022-03-26 15:02:14
 * @LastEditTime: 2022-03-28 15:40:37
 * @Description: 项目管理
 */
import { ApiConfigList } from "@/utils/ApiConfigClass";
import ProjectControllesClass from "@/controlles/ApiControlles/ProjectControllesClass";

const apiConfigList = new ApiConfigList()
apiConfigList.add('get', 'add', ProjectControllesClass.addProject)
export default apiConfigList.getApiconfig();