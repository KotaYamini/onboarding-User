interface workSpaceContent {
    image: string,
    header: string,
    text: string,
    selected:boolean
}

export interface DynamicTextModel {
    brandTxt: string,
    brandImg: string,
    isHorizontal: boolean,
    required: string,
    congratsImg: string,
    welcomeHeaderTxt: string,
    welcomeText: string,
    fullName: string,
    displayName: string,
    createBtn: string,
    workspaceHeaderTxt: string,
    workspaceMsgTxt: string,
    workspaceName: string,
    workspaceUrl: string,
    optional: string,
    workspaceTitle: string,
    planText: string,
    congratsTitle: string,
    launchMsg: string,
    launchBtn: string,
    workSpace: workSpaceContent[]
}


export const dynamicText = {
    "brandTxt": 'Eden',
    "brandImg": '../../assets/logo.JPG',
    "isHorizontal": true,
    "required": 'This field is required',
    "welcomeHeaderTxt": 'Welcome! First things first...',
    "welcomeText": 'You can always change them later.',
    "fullName": 'Full Name',
    "displayName": 'Display Name',
    "createBtn": 'Create Workspace',
    "workspaceHeaderTxt": 'Let`s setup a home for all your work',
    "workspaceMsgTxt": 'You can always create another workspace later.',
    "workspaceName": 'Workspace Name',
    "workspaceUrl": 'Workspace URL',
    "optional": '(optional)',
    "workspaceTitle": 'How are you planning to use Eden?',
    "planText": 'We`ll stremline your setup accordingly.',
    "congratsImg": '../../assets/right_check_icon.JPG',
    "congratsTitle": 'Congratulations, Eren!',
    "launchMsg": 'You have completed onboarding, you can start Eden!',
    "launchBtn": 'Launch Eden',
    "workSpace": [
        {
            image: '../../assets/user-icon.JPG',
            header: 'For myself',
            text: 'Write better. Think more clearly. Stay organized',
            selected:true
        },
        {
            image: '../../assets/team_icon.JPG',
            header: 'With my team',
            text: 'Wikis, docs, tasks & projects, all in one place',
            selected:false
        }
    ]
}
