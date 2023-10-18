import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/constants";
import { notifyError } from "../utils/notifyToasts";
import { getUser, getSavedProjects } from "../utils/auth";

const initialState = {
  currentProjects: [],
  savedProjects: getSavedProjects(),
  projectsLoading: false,
  projectsError: false,
  userProjectsLoading: false,
  userProjectsError: false,
  upvoteError: false,
  projectsWithTagLoading: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    loadProjects: (state) => {
      state.projectsLoading = true;
    },
    getProjectsSuccess: (state, { payload }) => {
      state.currentProjects = payload;
      state.projectsError = false;
      state.projectsLoading = false;
    },
    getProjectsFailure: (state) => {
      state.projectsError = true;
      state.projectsLoading = false;
    },
    loadUserProjects: (state) => {
      state.userProjectsLoading = true;
    },
    getUserProjectsSuccess: (state, { payload }) => {
      state.currentProjects = payload;
      state.userProjectsError = false;
      state.userProjectsLoading = false;
    },
    getUserProjectsFailure: (state) => {
      state.userProjectsError = true;
      state.userProjectsLoading = false;
    },
    updateUpvoteCount: (state, { payload }) => {
      let projectIndex;
      let project;
      state.currentProjects.forEach((item, index) => {
        if (item._id === payload.id) {
          projectIndex = index;
          project = item;
        }
      });
      project.upvotes = payload.newCount;
      project.upvoters = payload.newUpvotersList;
      state.currentProjects[projectIndex] = project;
    },
    loadProjectsWithTag: (state) => {
      state.projectsWithTagLoading = true;
    },
    getProjectsWithTagSuccess: (state, { payload }) => {
      state.currentProjects = payload;
      state.projectsWithTagLoading = false;
    },
    getProjectsWithTagFailure: (state) => {
      state.projectsWithTagLoading = false;
    },
    setSavedProjects: (state, { payload }) => {
      state.savedProjects = payload;
    },
  },
});

// actions
export const {
  loadProjects,
  getProjectsSuccess,
  getProjectsFailure,
  loadUserProjects,
  getUserProjectsSuccess,
  getUserProjectsFailure,
  updateUpvoteCount,
  loadProjectsWithTag,
  getProjectsWithTagSuccess,
  getProjectsWithTagFailure,
  setSavedProjects,
} = projectSlice.actions;

// selector
export const projectSelector = (state) => state.project;

// reducer
export const projectReducer = projectSlice.reducer;

// async functions
export function fetchProjects() {
  return async (dispatch) => {
    dispatch(loadProjects());

    const projects_data = {
      success: true,
      projects: [{
        _id: "62161893f0250053309db5ae",
        authorId: {
          _id: "61bd83b878b7a8686ea73b64",
          profileId: "61bd83b878b7a8686ea73b61",
          email: "test@test.com",
          username: "test",
          name: "Test",
          skills: ["react", "javascript", "html", "css", "material-ui"],
          followers: [],
          following: [],
          createdAt: "2021-12-18T06:46:16.904Z",
          updatedAt: "2022-03-11T17:43:30.215Z",
          __v: 34,
          bio: "This is a test profile",
          city: "India",
          country: "",
          cover: null,
          github: "",
          linkedin: "dfgdfgfgdfgdfgdfgdfgdfg",
          pic: "https://res.cloudinary.com/dv0oywqil/image/upload/v1641638485/k7xjibougdaasm3vjohu.jpg",
          portfolio: "dfgdfgdfgdfgdfgdfgdfgdf",
          twitter: "dfgdfgdfgdfgdfgdfgdf"
        },
        username: "test",
        author: "Test",
        projectName: "Hashloop",
        details: "Lorem ipsum",
        tags: ["react", "html", "css"],
        code: "https://github.com/Sreejan-22/hashloop",
        upvotes: 1,
        upvoters: ["test"],
        createdAt: "2022-02-23T11:20:51.864Z",
        updatedAt: "2022-04-29T14:19:42.187Z",
        __v: 9
      }, {
        _id: "620f6d1bf7c5a2f974307bcb",
        authorId: {
          _id: "61bd83b878b7a8686ea73b64",
          profileId: "61bd83b878b7a8686ea73b61",
          email: "test@test.com",
          username: "test",
          name: "Test",
          skills: ["react", "javascript", "html", "css", "material-ui"],
          followers: [],
          following: [],
          createdAt: "2021-12-18T06:46:16.904Z",
          updatedAt: "2022-03-11T17:43:30.215Z",
          __v: 34,
          bio: "This is a test profile",
          city: "India",
          country: "",
          cover: null,
          github: "",
          linkedin: "dfgdfgfgdfgdfgdfgdfgdfg",
          pic: "https://res.cloudinary.com/dv0oywqil/image/upload/v1641638485/k7xjibougdaasm3vjohu.jpg",
          portfolio: "dfgdfgdfgdfgdfgdfgdfgdf",
          twitter: "dfgdfgdfgdfgdfgdfgdf"
        },
        username: "test",
        author: "Test",
        projectName: "Sample app",
        details: "Lorem ipsum Lorem ipsum",
        tags: ["javascript", "react", "node", "haskell"],
        code: "https://github.com/Sreejan-22",
        upvotes: 0,
        upvoters: [],
        createdAt: "2022-02-18T09:55:39.127Z",
        updatedAt: "2022-04-29T14:19:45.014Z",
        __v: 5,
        live: null
      },]
    }
    
    dispatch(getProjectsSuccess(projects_data.projects));
    // try {
    //   const res = await fetch(`${baseUrl}/projects`);
    //   let data = await res.json();
    //   if (data.success) {
    //     dispatch(getProjectsSuccess(data.projects));
    //   } else {
    //     throw data.message;
    //   }
    // } catch (err) {
    //   dispatch(getProjectsFailure());
    // }
  };
}

export function fetchProjectsOfUser(username) {
  return async (dispatch) => {
    dispatch(loadProjects());

    try {
      const res = await fetch(`${baseUrl}/projects/${username}`);
      let data = await res.json();
      if (data.success) {
        dispatch(getUserProjectsSuccess(data.projects));
      } else {
        throw data.message;
      }
    } catch (err) {
      dispatch(getUserProjectsFailure());
    }
  };
}

export function fetchProjectsWithTag(tag) {
  return async (dispatch) => {
    dispatch(loadProjectsWithTag());

    try {
      const res = await fetch(`${baseUrl}/tags/${tag}`);
      const data = await res.json();

      if (data.success) {
        dispatch(getProjectsWithTagSuccess(data.projects));
      } else {
        dispatch(getProjectsWithTagFailure());
        notifyError("Failed to fetch projects with this tag");
      }
    } catch (err) {
      dispatch(getProjectsWithTagFailure());
      notifyError("Failed to fetch projects with this tag");
    }
  };
}

export function fetchSavedProjects() {
  return async (dispatch) => {
    dispatch(loadProjects());

    try {
      const res = await fetch(`${baseUrl}/saved/${getUser().username}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getUser().token}`,
        },
      });
      const data = await res.json();
      if (data.success) {
        const temp = data.savedProjects.map((item) => item.projectId);
        dispatch(getProjectsSuccess(temp));
      } else {
        dispatch(getProjectsFailure());
        notifyError("Failed to fetch bookmarked projects");
      }
    } catch (err) {
      dispatch(getProjectsFailure());
      notifyError("Failed to fetch bookmarked projects");
    }
  };
}

// save a project
// export function saveProject(projectId, username) {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(`${baseUrl}/saved/${projectId}/${username}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${getUser().token}`,
//         },
//       });
//       const data = await res.json();
//       if (data.success) {
//         dipatch(save);
//         notifySuccess("Project bookmarked");
//       } else {
//         notifyError("Failed to bookmark project");
//       }
//     } catch (err) {
//       notifyError("Failed to bookmark project");
//     }
//   };
// }

// export async function updateUpvoteCountDB(id, token, newCount, newUpvoterList) {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(`${baseUrl}/upvotes/${id}`, {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           newCount,
//           newUpvoterList,
//         }),
//       });
//       const data = await res.json();
//       if (!data.success) {
//         dispatch(setUpvoteError(true))
//       }
//     } catch (err) {
//       dispatch(setUpvoteError(true));
//     }
//   };
// }
