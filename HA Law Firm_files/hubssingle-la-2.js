!function (e, r, n) {
    "use strict";
    function a(r, n) {
        return function () {
            n.apply(r, e.makeArray(arguments))
        }
    }
    function t(r, n) {
        var t,
		u,
		i,
		c,
		o;
        for (t in r)
            if (r.hasOwnProperty(t)) {
                if (u = r[t], !u.hubName)
                    continue;
                o = n ? u.on : u.off;
                for (i in u.client)
                    if (u.client.hasOwnProperty(i)) {
                        if (c = u.client[i], !e.isFunction(c))
                            continue;
                        o.call(u, i, a(u, c))
                    }
            }
    }
    if ("function" != typeof e.signalR)
        throw new Error("SignalR: SignalR is not loaded. Please ensure jquery.signalR-x.js is referenced before ~/signalr/js.");
    var u = e.signalR;
    e.hubConnection.prototype.createHubProxies = function () {
        var r = {};
        return this.starting(function () {
            t(r, !0),
			this._registerSubscribedHubs()
        }).disconnected(function () {
            t(r, !1)
        }),
		r.chatHub = this.createHubProxy("chatHub"),
		r.chatHub.client = {},
		r.chatHub.server = {
		    addOnlineUser: function (n, a) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["AddOnlineUser"], e.makeArray(arguments)))
		    },
		    assignUsers2Webiste: function (n, a, t, u) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["AssignUsers2Webiste"], e.makeArray(arguments)))
		    },
		    broadcastSms: function (n) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["BroadcastSms"], e.makeArray(arguments)))
		    },
		    cSR_Disconnected: function (n) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["CSR_Disconnected"], e.makeArray(arguments)))
		    },
		    cSR_DisconnectedMe: function () {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["CSR_DisconnectedMe"], e.makeArray(arguments)))
		    },
		    emit: function (n) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["Emit"], e.makeArray(arguments)))
		    },
		    getAvailableUser: function (n, a, t, u, i, c, o) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["GetAvailableUser"], e.makeArray(arguments)))
		    },
		    getUserIdOrConnId: function (useridorConnId) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["getUserIdOrConnId"], e.makeArray(arguments)));
		    },
		    invitationAck: function (n, a) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["invitationAck"], e.makeArray(arguments)))
		    },
		    inviteOperator: function (n, a, t, u) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["InviteOperator"], e.makeArray(arguments)))
		    },
		    inviteOperatorWithReason: function (n, a, t, u, i, c) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["InviteOperatorWithReason"], e.makeArray(arguments)))
		    },
		    invokeChatMessage: function (n, a, t, u) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["InvokeChatMessage"], e.makeArray(arguments)))
		    },
		    invokeMessage: function (n, a, t) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["InvokeMessage"], e.makeArray(arguments)))
		    },
		    isCSA_Available: function () {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["IsCSA_Available"], e.makeArray(arguments)))
		    },
		    registerMe: function (n, a) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["RegisterMe"], e.makeArray(arguments)))
		    },
		    registerUser: function (n) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["RegisterUser"], e.makeArray(arguments)))
		    },
		    relogged: function (n, a, t) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["Relogged"], e.makeArray(arguments)))
		    },
		    removeCSRChat: function (n, a, t) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["RemoveCSRChat"], e.makeArray(arguments)))
		    },
		    send: function (n, a, t, u) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["Send"], e.makeArray(arguments)))
		    },
		    registerVisitor: function () {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["RegisterVisitor"], e.makeArray(arguments)))
		    },
		    sendBT: function (visitorId, data, websiteId) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["SendBT"], e.makeArray(arguments)));
		    },
		    sendGreeting: function (n, a, t, u, i) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["SendGreeting"], e.makeArray(arguments)))
		    },
		    sendUrl: function (n, a) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["SendUrl"], e.makeArray(arguments)))
		    },
		    stopTracking: function (n) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["StopTracking"], e.makeArray(arguments)))
		    },
		    subscribeSms: function () {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["SubscribeSms"], e.makeArray(arguments)))
		    },
		    unSubscribeSms: function () {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["UnSubscribeSms"], e.makeArray(arguments)))
		    },
		    visitorData: function () {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["VisitorData"], e.makeArray(arguments)))
		    },
		    notifyMessageFromClient: function (filePath, chatid) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["notifyMessageFromClient"], e.makeArray(arguments)));


		    }
		    ,getUserIdOrConnIdWithLogs: function (useridorConnId, chatId) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["GetUserIdOrConnIdWithLogs"], e.makeArray(arguments)));
		    },


		    updateChatTrfTime: function (visitorId, chatId, userId, toTrfUserId) {
		          return r.chatHub.invoke.apply(r.chatHub, e.merge(["UpdateChatTrfTime"], e.makeArray(arguments)));
		    },
		    markingChatAckLogs: function (visitorId, chatId, userId, actionType, connectionStatus) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["MarkingChatAckLogs"], e.makeArray(arguments)));
		    },

		    markAttemptDumpsChatLog: function () {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["MarkAttemptDumpsChatLog"], e.makeArray(arguments)));
		    },

		    updateAckAttempts: function (websiteid, visitorid, userId) {
		        return r.chatHub.invoke.apply(r.chatHub, e.merge(["UpdateAckAttempts"], e.makeArray(arguments)));

		    },
			 registerWebrtcUser: function (userId) {
                return r.chatHub.invoke.apply(r.chatHub, e.merge(["RegisterWebrtcUser"], e.makeArray(arguments))); 
             },
			 routeWebrtcPacket: function (json, type) {
                return r.chatHub.invoke.apply(r.chatHub, e.merge(["RouteWebrtcPacket"], e.makeArray(arguments))); 
				 
             },
			 invokeMessageVerbiage: function (message, websiteId, reasonPacket, userId, websiteUrl) {
                return r.chatHub.invoke.apply(r.chatHub, e.merge(["InvokeMessageVerbiage"], e.makeArray(arguments)));
             }

		},
		r
    },
	u.hub = e.hubConnection("/SignalRServer/signalr", {
	    useDefaultPath: !1
	}),
	e.extend(u, u.hub.createHubProxies())
}
(WGWindowLoader.laJquery, window);