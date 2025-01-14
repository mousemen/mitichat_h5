import Emitter from '../utils/emitter';
import { AccessFriendParams, AccessGroupParams, AccessMessageParams, AddFriendParams, AdvancedMsgParams, AdvancedQuoteMsgParams, AtMsgParams, ChangeGroupMemberMuteParams, ChangeGroupMuteParams, CreateGroupParams, CreateMeetingParams, CustomMsgParams, CustomSignalParams, FaceMessageParams, FileMsgFullParams, FileMsgParams, FindMessageParams, GetAdvancedHistoryMsgParams, GetGroupMemberByTimeParams, GetGroupMemberParams, GetHistoryMsgParams, GetOneConversationParams, GetOneCveParams, ImageMsgParams, InitAndLoginConfig, InsertGroupMsgParams, InsertSingleMsgParams, InviteGroupParams, isRecvParams, JoinGroupParams, LocationMsgParams, MarkNotiParams, MeetingOperateStreamParams, UpdateMemberInfoParams, MemberNameParams, MergerMsgParams, PartialUserItem, PinCveParams, QuoteMsgParams, RemarkFriendParams, RtcActionParams, SearchFriendParams, SearchGroupMemberParams, SearchGroupParams, SearchLocalParams, SendMsgParams, setBurnDurationParams, SetDraftParams, SetGroupRoleParams, SetGroupVerificationParams, SetMemberAuthParams, SetMessageLocalExParams, setPrvParams, SignalingInviteParams, SoundMsgParams, SouondMsgFullParams, SplitParams,SetConversationMsgDestructParams, SetConversationMsgDestructTimeParams, TransferGroupParams, TypingUpdateParams, UpdateMeetingParams, UploadFileParams, VideoMsgFullParams, VideoMsgParams, GetUserInfoWithCacheParams, GetGroupMessageReaderParams, SendGroupReadReceiptParams } from '../types/params';
import { CardElem, MessageItem, WsResponse, UserOnlineState, FullUserItemWithCache, GroupItem } from '../types/entity';
import { MessageReceiveOptType } from '../types/enum';
declare class SDK extends Emitter {
[x: string]: { data: { url: any; }; } | PromiseLike<{ data: { url: any; }; }>;
    private wasmInitializedPromise;
    private goExitPromise;
    private goExisted;
    private tryParse;
    private isLogStandardOutput;
    constructor(url?: string);
    _logWrap(...args: any[]): void;
    _invoker<T>(functionName: string, func: (...args: any[]) => Promise<any>, args: any[], processor?: (data: string) => string): Promise<WsResponse<T>>;
    login: (params: InitAndLoginConfig, operationID?: string) => Promise<any>;
    logout: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getAllConversationList: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getOneConversation: <T>(params: GetOneConversationParams, operationID?: string) => Promise<WsResponse<T>>;
    getAdvancedHistoryMessageList: <T>(params: GetAdvancedHistoryMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    getAdvancedHistoryMessageListReverse: <T>(params: GetAdvancedHistoryMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    getSpecifiedGroupsInfo: <T>(params: string[], operationID?: string) => Promise<WsResponse<T>>;
    deleteConversationAndDeleteAllMsg: <T>(conversationID: string, operationID?: string) => Promise<WsResponse<T>>;
    markConversationMessageAsRead: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    markMessagesAsReadByMsgID: <T>(params: MarkNotiParams, operationID?: string) => Promise<WsResponse<T>>;
    sendGroupMessageReadReceipt: <T>(params: SendGroupReadReceiptParams, operationID?: string) => Promise<WsResponse<T>>;
    getGroupMessageReaderList: <T>(params: GetGroupMessageReaderParams, operationID?: string) => Promise<WsResponse<T>>;
    getGroupMemberList: <T>(params: GetGroupMemberParams, operationID?: string) => Promise<WsResponse<T>>;
    createTextMessage: <T>(text: string, operationID?: string) => Promise<WsResponse<T>>;
    createImageMessage: <T>(params: ImageMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createImageMessageByFile: <T>(params: ImageMsgParams & {
        file: File;
    }, operationID?: string) => Promise<WsResponse<T>>;
    createCustomMessage: <T>(params: CustomMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createQuoteMessage: <T>(params: QuoteMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createAdvancedQuoteMessage: <T>(params: AdvancedQuoteMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createAdvancedTextMessage: <T>(params: AdvancedMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    sendMessage: <T>(params: SendMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    sendMessageNotOss: <T>(params: SendMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    sendMessageByBuffer: <T>(params: SendMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    setMessageLocalEx: <T>(params: SetMessageLocalExParams, operationID?: string) => Promise<WsResponse<T>>;
    exportDB(operationID?: string): Promise<WsResponse<unknown>>;
    getHistoryMessageListReverse: <T>(params: GetHistoryMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    revokeMessage: <T>(data: AccessMessageParams, operationID?: string) => Promise<WsResponse<T>>;
    setConversationPrivateChat: <T>(params: setPrvParams, operationID?: string) => Promise<WsResponse<T>>;
    setConversationBurnDuration: <T>(params: setBurnDurationParams, operationID?: string) => Promise<WsResponse<T>>;
    getLoginStatus: <T>(operationID?: string) => Promise<WsResponse<T>>;
    setAppBackgroundStatus: <T>(data: boolean, operationID?: string) => Promise<WsResponse<T>>;
    networkStatusChanged: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getLoginUser: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getSelfUserInfo: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getUsersInfo: <T>(data: string[], operationID?: string) => Promise<WsResponse<T>>;
    getUsersInfoWithCache: <T>(data: GetUserInfoWithCacheParams, operationID?: string) => Promise<WsResponse<FullUserItemWithCache[]>>;
    setSelfInfo: <T>(data: PartialUserItem, operationID?: string) => Promise<WsResponse<T>>;
    createTextAtMessage: <T>(data: AtMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createSoundMessage: <T>(data: SoundMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createSoundMessageByFile: <T>(data: SoundMsgParams & {
        file: File;
    }, operationID?: string) => Promise<WsResponse<T>>;
    createVideoMessage: <T>(data: VideoMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createVideoMessageByFile: <T>(data: VideoMsgParams & {
        videoFile: File;
        snapshotFile: File;
    }, operationID?: string) => Promise<WsResponse<T>>;
    createFileMessage: <T>(data: FileMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createFileMessageByFile: <T>(data: FileMsgParams & {
        file: File;
    }, operationID?: string) => Promise<WsResponse<T>>;
    createFileMessageFromFullPath: <T>(data: FileMsgFullParams, operationID?: string) => Promise<WsResponse<T>>;
    createImageMessageFromFullPath: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    createSoundMessageFromFullPath: <T>(data: SouondMsgFullParams, operationID?: string) => Promise<WsResponse<T>>;
    createVideoMessageFromFullPath: <T>(data: VideoMsgFullParams, operationID?: string) => Promise<WsResponse<T>>;
    createMergerMessage: <T>(data: MergerMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createForwardMessage: <T>(data: MessageItem, operationID?: string) => Promise<WsResponse<T>>;
    createFaceMessage: <T>(data: FaceMessageParams, operationID?: string) => Promise<WsResponse<T>>;
    createLocationMessage: <T>(data: LocationMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createCardMessage: <T>(data: CardElem, operationID?: string) => Promise<WsResponse<T>>;
    deleteMessageFromLocalStorage: <T>(data: AccessMessageParams, operationID?: string) => Promise<WsResponse<T>>;
    deleteMessage: <T>(data: AccessMessageParams, operationID?: string) => Promise<WsResponse<T>>;
    deleteAllConversationFromLocal: <T>(operationID?: string) => Promise<WsResponse<T>>;
    deleteAllMsgFromLocal: <T>(operationID?: string) => Promise<WsResponse<T>>;
    deleteAllMsgFromLocalAndSvr: <T>(operationID?: string) => Promise<WsResponse<T>>;
    insertSingleMessageToLocalStorage: <T>(data: InsertSingleMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    insertGroupMessageToLocalStorage: <T>(data: InsertGroupMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    typingStatusUpdate: <T>(data: TypingUpdateParams, operationID?: string) => Promise<WsResponse<T>>;
    clearConversationAndDeleteAllMsg: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    hideConversation: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    getConversationListSplit: <T>(data: SplitParams, operationID?: string) => Promise<WsResponse<T>>;
    getConversationIDBySessionType: <T>(data: GetOneCveParams, operationID?: string) => Promise<WsResponse<T>>;
    getMultipleConversation: <T>(data: string[], operationID?: string) => Promise<WsResponse<T>>;
    deleteConversation: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    setConversationDraft: <T>(data: SetDraftParams, operationID?: string) => Promise<WsResponse<T>>;
    pinConversation: <T>(data: PinCveParams, operationID?: string) => Promise<WsResponse<T>>;
    getTotalUnreadMsgCount: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getConversationRecvMessageOpt: <T>(data: string[], operationID?: string) => Promise<WsResponse<T>>;
    setConversationRecvMessageOpt: <T>(data: isRecvParams, operationID?: string) => Promise<WsResponse<T>>;
    searchLocalMessages: <T>(data: SearchLocalParams, operationID?: string) => Promise<WsResponse<T>>;
    addFriend: <T>(data: AddFriendParams, operationID?: string) => Promise<WsResponse<T>>;
    searchFriends: <T>(data: SearchFriendParams, operationID?: string) => Promise<WsResponse<T>>;
    getSpecifiedFriendsInfo: <T>(data: string[], operationID?: string) => Promise<WsResponse<T>>;
    getFriendApplicationListAsRecipient: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getFriendApplicationListAsApplicant: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getFriendList: <T>(operationID?: string) => Promise<WsResponse<T>>;
    setFriendRemark: <T>(data: RemarkFriendParams, operationID?: string) => Promise<WsResponse<T>>;
    checkFriend: <T>(data: string[], operationID?: string) => Promise<WsResponse<T>>;
    acceptFriendApplication: <T>(data: AccessFriendParams, operationID?: string) => Promise<WsResponse<T>>;
    refuseFriendApplication: <T>(data: AccessFriendParams, operationID?: string) => Promise<WsResponse<T>>;
    deleteFriend: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    addBlack: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    removeBlack: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    getBlackList: <T>(operationID?: string) => Promise<WsResponse<T>>;
    inviteUserToGroup: <T>(data: InviteGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    kickGroupMember: <T>(data: InviteGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    isJoinGroup: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    getSpecifiedGroupMembersInfo: <T>(data: Omit<InviteGroupParams, 'reason'>, operationID?: string) => Promise<WsResponse<T>>;
    getGroupMemberListByJoinTimeFilter: <T>(data: GetGroupMemberByTimeParams, operationID?: string) => Promise<WsResponse<T>>;
    searchGroupMembers: <T>(data: SearchGroupMemberParams, operationID?: string) => Promise<WsResponse<T>>;
    setGroupApplyMemberFriend: <T>(data: SetMemberAuthParams, operationID?: string) => Promise<WsResponse<T>>;
    setGroupLookMemberInfo: <T>(data: SetMemberAuthParams, operationID?: string) => Promise<WsResponse<T>>;
    getJoinedGroupList: <T>(operationID?: string) => Promise<WsResponse<T>>;
    createGroup: <T>(data: CreateGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    setGroupInfo: <T>(data: Partial<GroupItem> & {groupID: string}, operationID?: string) => Promise<WsResponse<T>>;
    setGroupMemberNickname: <T>(data: MemberNameParams, operationID?: string) => Promise<WsResponse<T>>;
    setGroupMemberInfo: <T>(data: UpdateMemberInfoParams, operationID?: string) => Promise<WsResponse<T>>;
    joinGroup: <T>(data: JoinGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    searchGroups: <T>(data: SearchGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    quitGroup: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    dismissGroup: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    changeGroupMute: <T>(data: ChangeGroupMuteParams, operationID?: string) => Promise<WsResponse<T>>;
    changeGroupMemberMute: <T>(data: ChangeGroupMemberMuteParams, operationID?: string) => Promise<WsResponse<T>>;
    transferGroupOwner: <T>(data: TransferGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    getGroupApplicationListAsApplicant: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getGroupApplicationListAsRecipient: <T>(operationID?: string) => Promise<WsResponse<T>>;
    acceptGroupApplication: <T>(data: AccessGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    refuseGroupApplication: <T>(data: AccessGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    resetConversationGroupAtType: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    setGroupMemberRoleLevel: <T>(data: SetGroupRoleParams, operationID?: string) => Promise<WsResponse<T>>;
    setGroupVerification: <T>(data: SetGroupVerificationParams, operationID?: string) => Promise<WsResponse<T>>;
    getGroupMemberOwnerAndAdmin: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    setGlobalRecvMessageOpt: <T>(opt: MessageReceiveOptType, operationID?: string) => Promise<WsResponse<T>>;
    findMessageList: <T>(data: FindMessageParams, operationID?: string) => Promise<WsResponse<T>>;
    uploadFile: (data: UploadFileParams, operationID?: string) => Promise<WsResponse<{
        url: string;
    }>>;
    signalingInvite: <T>(data: SignalingInviteParams, operationID?: string) => Promise<WsResponse<T>>;
    signalingInviteInGroup: <T>(data: SignalingInviteParams, operationID?: string) => Promise<WsResponse<T>>;
    signalingAccept: <T>(data: RtcActionParams, operationID?: string) => Promise<WsResponse<T>>;
    signalingReject: <T>(data: RtcActionParams, operationID?: string) => Promise<WsResponse<T>>;
    signalingCancel: <T>(data: RtcActionParams, operationID?: string) => Promise<WsResponse<T>>;
    signalingHungUp: <T>(data: RtcActionParams, operationID?: string) => Promise<WsResponse<T>>;
    signalingGetRoomByGroupID: <T>(groupID: string, operationID?: string) => Promise<WsResponse<T>>;
    signalingGetTokenByRoomID: <T>(roomID: string, operationID?: string) => Promise<WsResponse<T>>;
    signalingSendCustomSignal: <T>(data: CustomSignalParams, operationID?: string) => Promise<WsResponse<T>>;
    signalingCreateMeeting: <T>(data: CreateMeetingParams, operationID?: string) => Promise<WsResponse<T>>;
    signalingJoinMeeting: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    signalingUpdateMeetingInfo: <T>(data: Partial<UpdateMeetingParams>, operationID?: string) => Promise<WsResponse<T>>;
    signalingCloseRoom: <T>(roomID: string, operationID?: string) => Promise<WsResponse<T>>;
    signalingGetMeetings: <T>(operationID?: string) => Promise<WsResponse<T>>;
    signalingOperateStream: <T>(data: MeetingOperateStreamParams, operationID?: string) => Promise<WsResponse<T>>;
    setConversationIsMsgDestruct: (data: SetConversationMsgDestructParams, operationID?: string) => Promise<WsResponse<unknown>>;
    setConversationMsgDestructTime: (data: SetConversationMsgDestructTimeParams, operationID?: string) => Promise<WsResponse<unknown>>;
    subscribeUsersStatus: (data: string[], operationID?: string) => Promise<WsResponse<UserOnlineState[]>>;
    unsubscribeUsersStatus: (data: string[], operationID?: string) => Promise<WsResponse<UserOnlineState[]>>;
    getUserStatus: (data: string[],operationID?: string) => Promise<WsResponse<UserOnlineState[]>>;
    getSubscribeUsersStatus: (operationID?: string) => Promise<WsResponse<UserOnlineState[]>>;
    fileMapSet: (uuid: string, file: File) => Promise<unknown>;
}
export declare function getSDK(url?: string): SDK;
export {};
