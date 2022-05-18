import { createStyles, Theme } from '@material-ui/core';

// スタイル
export const styles = (theme: Theme) =>
  createStyles({
    dialog: {
      minHeight: '50vh',
      minWidth: '70vw',
      maxWidth: '90vw',
    },
    Senddialog: {
      minHeight: '90vh',
      minWidth: '70vw',
    },
    userDialog: {
      minWidth: '1100px',
      maxHeight: '570px',
      borderRadius: 10,
    },
    userDetailDialog: {
      minWidth: '70vw',
      height: '80vh',
      borderRadius: 10,
    },
    DailyReportDialog: {
      minWidth: '1100px',
      maxHeight: '750px',
      borderRadius: 10,
    },
    WeeklyReportDialog: {
      minWidth: '1100px',
      maxHeight: '750px',
      borderRadius: 10,
    },
    qrDialog: {
      minWidth: '1100px',
      maxHeight: '620px',
      borderRadius: 10,
    },
    messageDialog: {
      width: '100vw',
      maxHeight: '70vh',
      borderRadius: 20,
      backgroundColor: '#f2f2f2',
    },
    dialogTitle: {
      padding: '16px 16px 0px 16px',
    },
    templateDialog: {
      minHeight: '98vh',
      minWidth: '40vw',
      maxWidth: '90vw',
      overflowY: 'auto',
    },
    userRegistDialog: {
      minWidth: '60vw',
      maxWidth: '90vw',
      maxHeight: '90vh',
      overflowY: 'auto',
    },
    attributeDialog: {
      minWidth: '700px',
    },
    previewDialog: {
      minHeight: '98vh',
      minWidth: '40vw',
      maxWidth: '40vw',
      overflowY: 'auto',
    },
    templateDialogRoot: {
      padding: '8px 24px',
      flex: 'none',
      overflowY: 'hidden',
    },
    templateDialogAction: {
      padding: '4px 24px',
      flex: 'none',
      overflowY: 'hidden',
    },
    Ouboshadialog: {
      minHeight: '100vh',
      minWidth: '70vw',
      maxWidth: '90vw',
    },
    dialogLog: {
      minHeight: '50vh',
      minWidth: '50vw',
      maxWidth: '90vw',
    },
    dialogBig: {
      minHeight: '80vh',
      maxHeight: '96vh',
      minWidth: '80vw',
      maxWidth: '96vw',
    },
    formHelperLabel: {
      color: '#FF0000',
    },
    textFd: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: 'calc(100% - 2rem)',
    },
    textFdNew: {
      width: '100%',
      clear: 'both',
      borderRadius: 10,
    },
    textFd_templateName: {
      width: '400px',
    },
    textFd_subject: {
      width: '100%',
    },
    textFd_mailText: {
      width: '100%',
      height: '100%',
    },
    textTotal: {
      // width: '100%',
      paddingLeft: '2rem',
      // textAlign: 'right',
    },
    gridRight: {
      textAlign: 'right',
    },
    gridCheck: {
      paddingTop: '2rem',
    },
    radioGroupV: {
      width: 'auto',
      height: 'auto',
    },
    radioGroupH: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    template: {
      margin: 0,
      ...theme.mixins.gutters(),
      marginTop: theme.spacing(1),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    search: {
      ...theme.mixins.gutters(),
      marginTop: theme.spacing(1),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    mail_create: {
      margin: '0 auto',
      width: '60vw',
    },
    previewAddress: {
      width: '33vw',
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
    },
    searchBtn: {
      textAlign: 'right',
      paddingTop: '40px !important',
    },
    functionBtn: {
      marginTop: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    ModeSelectButton: {
      width: '100%',
      height: 90,
      fontSize: 32,
      marginTop: theme.spacing(3),
    },
    Button: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    fab: {
      margin: theme.spacing(1),
    },
    addBtn: {
      textAlign: 'right',
    },
    lowerButton: {
      textTransform: 'none',
    },
    input: {
      textAlign: 'left',
      // marginLeft: theme.spacing(3),
      marginRight: theme.spacing(9),
    },
    timeStamp: {
      paddingTop: '2px',
    },
    fileDeleteBtn: {
      marginBottom: '1px',
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    tblDiv: {
      margin: '1px;',
      width: '99%',
      padding: '1px',
      overflowX: 'auto',
    },
    tblDivIn: {
      width: '150%',
    },
    tblDivIn200: {
      width: '200%',
    },
    bgBlue: {
      backgroundColor: '#4287f5',
    },
    bgYellow: {
      backgroundColor: '#f0ed30',
    },
    bgGreen: {
      backgroundColor: '#a6f030',
    },
    bgRed: {
      backgroundColor: '#f04a30',
    },
    bgPink: {
      backgroundColor: '#edade6',
    },
    DateInput: {
      margin: 0,
      padding: 0,
      background: '#ffffff',
      display: 'inline-block',
      width: '130px',
      verticalAlign: 'middle',
    },
    labelMark: {
      display: 'inline',
      padding: '.3em .6em .3em',
      fontSize: '75%',
      fontWeight: 700,
      lineHeight: 1,
      color: '#fff',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      borderRadius: '.25em',
    },
    labelMarkPrimary: {
      backgroundColor: '#337ab7',
    },
    inputFileBtnHide: {
      opacity: 0,
      display: 'block',
      width: '0px',
      appearance: 'none',
      position: 'absolute',
      cursor: 'pointer',
    },
    ButtonGroupMain: {
      opacity: 0,
      display: 'block',
      appearance: 'none',
      position: 'absolute',
      cursor: 'pointer',
      maxWidth: '5vw',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    dividerColor: {
      backgroundColor: 'white',
      maxWidth: '50vw',
      margin: '4px auto',
    },
    bodyWrapper: {
      height: '60vh',
      overflowY: 'scroll',
    },
    fileButtonWrapper: {
      margin: '0px 0px 10px 0px',
    },
    fileButton: {
      padding: '3px 16px',
    },
    getEmojiButton: {
      margin: 0,
      cursor: 'pointer',
      border: 0,
      '&:hover': {
        border: 0,
      },
    },
    emojiPicker: {
      position: 'absolute',
      right: 140,
      top: 10,
      cssFloat: 'right',
      marginLeft: '200px',
    },
    emojiPicker1: {
      position: 'absolute',
      right: '30%',
      top: '30%',
      cssFloat: 'right',
      marginLeft: '200px',
    },
    stamps: {
      width: '70px',
      height: '70px',
      '&:hover': {
        width: '69px',
        height: '69px',
        border: '1px solid #D3D0D0',
      },
    },
    tablerow: {
      backgroundColor: 'red',
      '&:nth-child(2)': {
        backgroundColor: 'blue',
      },
    },
  });
