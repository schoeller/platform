export class ProjectRepository {
  constructor (defaultClient) {
    this.defaultClient = defaultClient
    this.projectApiClient = new defaultClient.ProjectApi()
  }

  async createNewProject (idCloud, name) {
    try {
      let project = new this.defaultClient.Project()
      // project.
      project.name = name
      const response = await this.projectApiClient.createProject(idCloud, project)
      return response
    } catch (e) {
      console.log(e.statusCode)
    }
  }

  async deleteProject (idCloud, project) {
    try {
      const response = await this.projectApiClient.deleteProject(idCloud, project.id)
      return response
    } catch (e) {
      console.log(e.statusCode)
    }
  }

  async updateProject (idCloud, project) {
    try {
      const response = await this.projectApiClient.updateProject(idCloud, project.id, project)
      return response
    } catch (e) {
      console.log(e.statusCode)
    }
  }

  async getTree (idCloud, idProject) {
    try {
      const response = this.projectApiClient.getProjectTree(idCloud, idProject)
      return response
    } catch (e) {
      console.log(e.statusCode)
    }
  }

  async deleteDocument (idCloud, idProject, idDocument) {
    try {
      const response = this.projectApiClient.deleteDocument(idCloud, idDocument, idProject)
      return response
    } catch (e) {
      console.log(e.statusCode)
    }
  }

  async deleteFolder (idCloud, idProject, idFolder) {
    try {
      const response = this.projectApiClient.deleteFolder(idCloud, idFolder, idProject)
      return response
    } catch (e) {
      console.log(e.statusCode)
    }
  }

  async createFolder (idCloud, idProject, name, idParent) {
    try {
      let folder = new this.defaultClient.Folder()
      folder.name = name
      folder.parent_id = idParent
      const response = await this.projectApiClient.createFolder(idCloud, idProject, folder)
      return response
    } catch (e) {
      console.log(e.statusCode)
    }
  }

  async updateFolder (idCloud, idProject, idFolder, idParent) {
    try {
      let folder = new this.defaultClient.Folder()
      folder.parent_id = idParent
      const response = await this.projectApiClient.updateFolder(idCloud, idFolder, idProject, folder)
      return response
    } catch (e) {
      console.log(e.statusCode)
    }
  }

  async updateDocument (idCloud, idProject, idFolder, idParent) {
    try {
      let folder = new this.defaultClient.Folder()
      folder.parent_id = idParent
      const response = await this.projectApiClient.updateDocument(idCloud, idFolder, idProject, folder)
      return response
    } catch (e) {
      console.log(e.statusCode)
    }
  }
}