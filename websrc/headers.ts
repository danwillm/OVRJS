//enums
export enum EVREye {
	Eye_Left = 0,
	Eye_Right = 1,
}
export enum ETextureType {
	TextureType_Invalid = -1,
	TextureType_DirectX = 0,
	TextureType_OpenGL = 1,
	TextureType_Vulkan = 2,
	TextureType_IOSurface = 3,
	TextureType_DirectX12 = 4,
	TextureType_DXGISharedHandle = 5,
	TextureType_Metal = 6,
}
export enum EColorSpace {
	ColorSpace_Auto = 0,
	ColorSpace_Gamma = 1,
	ColorSpace_Linear = 2,
}
export enum ETrackingResult {
	TrackingResult_Uninitialized = 1,
	TrackingResult_Calibrating_InProgress = 100,
	TrackingResult_Calibrating_OutOfRange = 101,
	TrackingResult_Running_OK = 200,
	TrackingResult_Running_OutOfRange = 201,
	TrackingResult_Fallback_RotationOnly = 300,
}
export enum ETrackedDeviceClass {
	TrackedDeviceClass_Invalid = 0,
	TrackedDeviceClass_HMD = 1,
	TrackedDeviceClass_Controller = 2,
	TrackedDeviceClass_GenericTracker = 3,
	TrackedDeviceClass_TrackingReference = 4,
	TrackedDeviceClass_DisplayRedirect = 5,
	TrackedDeviceClass_Max = 6,
}
export enum ETrackedControllerRole {
	TrackedControllerRole_Invalid = 0,
	TrackedControllerRole_LeftHand = 1,
	TrackedControllerRole_RightHand = 2,
	TrackedControllerRole_OptOut = 3,
	TrackedControllerRole_Treadmill = 4,
	TrackedControllerRole_Stylus = 5,
	TrackedControllerRole_Max = 5,
}
export enum ETrackingUniverseOrigin {
	TrackingUniverseSeated = 0,
	TrackingUniverseStanding = 1,
	TrackingUniverseRawAndUncalibrated = 2,
}
export enum EAdditionalRadioFeatures {
	AdditionalRadioFeatures_None = 0,
	AdditionalRadioFeatures_HTCLinkBox = 1,
	AdditionalRadioFeatures_InternalDongle = 2,
	AdditionalRadioFeatures_ExternalDongle = 4,
}
export enum ETrackedDeviceProperty {
	Prop_Invalid = 0,
	Prop_TrackingSystemName_String = 1000,
	Prop_ModelNumber_String = 1001,
	Prop_SerialNumber_String = 1002,
	Prop_RenderModelName_String = 1003,
	Prop_WillDriftInYaw_Bool = 1004,
	Prop_ManufacturerName_String = 1005,
	Prop_TrackingFirmwareVersion_String = 1006,
	Prop_HardwareRevision_String = 1007,
	Prop_AllWirelessDongleDescriptions_String = 1008,
	Prop_ConnectedWirelessDongle_String = 1009,
	Prop_DeviceIsWireless_Bool = 1010,
	Prop_DeviceIsCharging_Bool = 1011,
	Prop_DeviceBatteryPercentage_Float = 1012,
	Prop_StatusDisplayTransform_Matrix34 = 1013,
	Prop_Firmware_UpdateAvailable_Bool = 1014,
	Prop_Firmware_ManualUpdate_Bool = 1015,
	Prop_Firmware_ManualUpdateURL_String = 1016,
	Prop_HardwareRevision_Uint64 = 1017,
	Prop_FirmwareVersion_Uint64 = 1018,
	Prop_FPGAVersion_Uint64 = 1019,
	Prop_VRCVersion_Uint64 = 1020,
	Prop_RadioVersion_Uint64 = 1021,
	Prop_DongleVersion_Uint64 = 1022,
	Prop_BlockServerShutdown_Bool = 1023,
	Prop_CanUnifyCoordinateSystemWithHmd_Bool = 1024,
	Prop_ContainsProximitySensor_Bool = 1025,
	Prop_DeviceProvidesBatteryStatus_Bool = 1026,
	Prop_DeviceCanPowerOff_Bool = 1027,
	Prop_Firmware_ProgrammingTarget_String = 1028,
	Prop_DeviceClass_Int32 = 1029,
	Prop_HasCamera_Bool = 1030,
	Prop_DriverVersion_String = 1031,
	Prop_Firmware_ForceUpdateRequired_Bool = 1032,
	Prop_ViveSystemButtonFixRequired_Bool = 1033,
	Prop_ParentDriver_Uint64 = 1034,
	Prop_ResourceRoot_String = 1035,
	Prop_RegisteredDeviceType_String = 1036,
	Prop_InputProfilePath_String = 1037,
	Prop_NeverTracked_Bool = 1038,
	Prop_NumCameras_Int32 = 1039,
	Prop_CameraFrameLayout_Int32 = 1040,
	Prop_CameraStreamFormat_Int32 = 1041,
	Prop_AdditionalDeviceSettingsPath_String = 1042,
	Prop_Identifiable_Bool = 1043,
	Prop_BootloaderVersion_Uint64 = 1044,
	Prop_AdditionalSystemReportData_String = 1045,
	Prop_CompositeFirmwareVersion_String = 1046,
	Prop_Firmware_RemindUpdate_Bool = 1047,
	Prop_PeripheralApplicationVersion_Uint64 = 1048,
	Prop_ManufacturerSerialNumber_String = 1049,
	Prop_ComputedSerialNumber_String = 1050,
	Prop_EstimatedDeviceFirstUseTime_Int32 = 1051,
	Prop_DevicePowerUsage_Float = 1052,
	Prop_IgnoreMotionForStandby_Bool = 1053,
	Prop_ReportsTimeSinceVSync_Bool = 2000,
	Prop_SecondsFromVsyncToPhotons_Float = 2001,
	Prop_DisplayFrequency_Float = 2002,
	Prop_UserIpdMeters_Float = 2003,
	Prop_CurrentUniverseId_Uint64 = 2004,
	Prop_PreviousUniverseId_Uint64 = 2005,
	Prop_DisplayFirmwareVersion_Uint64 = 2006,
	Prop_IsOnDesktop_Bool = 2007,
	Prop_DisplayMCType_Int32 = 2008,
	Prop_DisplayMCOffset_Float = 2009,
	Prop_DisplayMCScale_Float = 2010,
	Prop_EdidVendorID_Int32 = 2011,
	Prop_DisplayMCImageLeft_String = 2012,
	Prop_DisplayMCImageRight_String = 2013,
	Prop_DisplayGCBlackClamp_Float = 2014,
	Prop_EdidProductID_Int32 = 2015,
	Prop_CameraToHeadTransform_Matrix34 = 2016,
	Prop_DisplayGCType_Int32 = 2017,
	Prop_DisplayGCOffset_Float = 2018,
	Prop_DisplayGCScale_Float = 2019,
	Prop_DisplayGCPrescale_Float = 2020,
	Prop_DisplayGCImage_String = 2021,
	Prop_LensCenterLeftU_Float = 2022,
	Prop_LensCenterLeftV_Float = 2023,
	Prop_LensCenterRightU_Float = 2024,
	Prop_LensCenterRightV_Float = 2025,
	Prop_UserHeadToEyeDepthMeters_Float = 2026,
	Prop_CameraFirmwareVersion_Uint64 = 2027,
	Prop_CameraFirmwareDescription_String = 2028,
	Prop_DisplayFPGAVersion_Uint64 = 2029,
	Prop_DisplayBootloaderVersion_Uint64 = 2030,
	Prop_DisplayHardwareVersion_Uint64 = 2031,
	Prop_AudioFirmwareVersion_Uint64 = 2032,
	Prop_CameraCompatibilityMode_Int32 = 2033,
	Prop_ScreenshotHorizontalFieldOfViewDegrees_Float = 2034,
	Prop_ScreenshotVerticalFieldOfViewDegrees_Float = 2035,
	Prop_DisplaySuppressed_Bool = 2036,
	Prop_DisplayAllowNightMode_Bool = 2037,
	Prop_DisplayMCImageWidth_Int32 = 2038,
	Prop_DisplayMCImageHeight_Int32 = 2039,
	Prop_DisplayMCImageNumChannels_Int32 = 2040,
	Prop_DisplayMCImageData_Binary = 2041,
	Prop_SecondsFromPhotonsToVblank_Float = 2042,
	Prop_DriverDirectModeSendsVsyncEvents_Bool = 2043,
	Prop_DisplayDebugMode_Bool = 2044,
	Prop_GraphicsAdapterLuid_Uint64 = 2045,
	Prop_DriverProvidedChaperonePath_String = 2048,
	Prop_ExpectedTrackingReferenceCount_Int32 = 2049,
	Prop_ExpectedControllerCount_Int32 = 2050,
	Prop_NamedIconPathControllerLeftDeviceOff_String = 2051,
	Prop_NamedIconPathControllerRightDeviceOff_String = 2052,
	Prop_NamedIconPathTrackingReferenceDeviceOff_String = 2053,
	Prop_DoNotApplyPrediction_Bool = 2054,
	Prop_CameraToHeadTransforms_Matrix34_Array = 2055,
	Prop_DistortionMeshResolution_Int32 = 2056,
	Prop_DriverIsDrawingControllers_Bool = 2057,
	Prop_DriverRequestsApplicationPause_Bool = 2058,
	Prop_DriverRequestsReducedRendering_Bool = 2059,
	Prop_MinimumIpdStepMeters_Float = 2060,
	Prop_AudioBridgeFirmwareVersion_Uint64 = 2061,
	Prop_ImageBridgeFirmwareVersion_Uint64 = 2062,
	Prop_ImuToHeadTransform_Matrix34 = 2063,
	Prop_ImuFactoryGyroBias_Vector3 = 2064,
	Prop_ImuFactoryGyroScale_Vector3 = 2065,
	Prop_ImuFactoryAccelerometerBias_Vector3 = 2066,
	Prop_ImuFactoryAccelerometerScale_Vector3 = 2067,
	Prop_ConfigurationIncludesLighthouse20Features_Bool = 2069,
	Prop_AdditionalRadioFeatures_Uint64 = 2070,
	Prop_CameraWhiteBalance_Vector4_Array = 2071,
	Prop_CameraDistortionFunction_Int32_Array = 2072,
	Prop_CameraDistortionCoefficients_Float_Array = 2073,
	Prop_ExpectedControllerType_String = 2074,
	Prop_HmdTrackingStyle_Int32 = 2075,
	Prop_DriverProvidedChaperoneVisibility_Bool = 2076,
	Prop_HmdColumnCorrectionSettingPrefix_String = 2077,
	Prop_CameraSupportsCompatibilityModes_Bool = 2078,
	Prop_SupportsRoomViewDepthProjection_Bool = 2079,
	Prop_DisplayAvailableFrameRates_Float_Array = 2080,
	Prop_DisplaySupportsMultipleFramerates_Bool = 2081,
	Prop_DisplayColorMultLeft_Vector3 = 2082,
	Prop_DisplayColorMultRight_Vector3 = 2083,
	Prop_DisplaySupportsRuntimeFramerateChange_Bool = 2084,
	Prop_DisplaySupportsAnalogGain_Bool = 2085,
	Prop_DisplayMinAnalogGain_Float = 2086,
	Prop_DisplayMaxAnalogGain_Float = 2087,
	Prop_CameraExposureTime_Float = 2088,
	Prop_CameraGlobalGain_Float = 2089,
	Prop_DashboardScale_Float = 2091,
	Prop_PeerButtonInfo_String = 2092,
	Prop_IpdUIRangeMinMeters_Float = 2100,
	Prop_IpdUIRangeMaxMeters_Float = 2101,
	Prop_Hmd_SupportsHDCP14LegacyCompat_Bool = 2102,
	Prop_Hmd_SupportsMicMonitoring_Bool = 2103,
	Prop_Hmd_SupportsDisplayPortTrainingMode_Bool = 2104,
	Prop_SupportsRoomViewDirect_Bool = 2105,
	Prop_SupportsAppThrottling_Bool = 2106,
	Prop_DriverRequestedMuraCorrectionMode_Int32 = 2200,
	Prop_DriverRequestedMuraFeather_InnerLeft_Int32 = 2201,
	Prop_DriverRequestedMuraFeather_InnerRight_Int32 = 2202,
	Prop_DriverRequestedMuraFeather_InnerTop_Int32 = 2203,
	Prop_DriverRequestedMuraFeather_InnerBottom_Int32 = 2204,
	Prop_DriverRequestedMuraFeather_OuterLeft_Int32 = 2205,
	Prop_DriverRequestedMuraFeather_OuterRight_Int32 = 2206,
	Prop_DriverRequestedMuraFeather_OuterTop_Int32 = 2207,
	Prop_DriverRequestedMuraFeather_OuterBottom_Int32 = 2208,
	Prop_Audio_DefaultPlaybackDeviceId_String = 2300,
	Prop_Audio_DefaultRecordingDeviceId_String = 2301,
	Prop_Audio_DefaultPlaybackDeviceVolume_Float = 2302,
	Prop_Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303,
	Prop_AttachedDeviceId_String = 3000,
	Prop_SupportedButtons_Uint64 = 3001,
	Prop_Axis0Type_Int32 = 3002,
	Prop_Axis1Type_Int32 = 3003,
	Prop_Axis2Type_Int32 = 3004,
	Prop_Axis3Type_Int32 = 3005,
	Prop_Axis4Type_Int32 = 3006,
	Prop_ControllerRoleHint_Int32 = 3007,
	Prop_FieldOfViewLeftDegrees_Float = 4000,
	Prop_FieldOfViewRightDegrees_Float = 4001,
	Prop_FieldOfViewTopDegrees_Float = 4002,
	Prop_FieldOfViewBottomDegrees_Float = 4003,
	Prop_TrackingRangeMinimumMeters_Float = 4004,
	Prop_TrackingRangeMaximumMeters_Float = 4005,
	Prop_ModeLabel_String = 4006,
	Prop_CanWirelessIdentify_Bool = 4007,
	Prop_Nonce_Int32 = 4008,
	Prop_IconPathName_String = 5000,
	Prop_NamedIconPathDeviceOff_String = 5001,
	Prop_NamedIconPathDeviceSearching_String = 5002,
	Prop_NamedIconPathDeviceSearchingAlert_String = 5003,
	Prop_NamedIconPathDeviceReady_String = 5004,
	Prop_NamedIconPathDeviceReadyAlert_String = 5005,
	Prop_NamedIconPathDeviceNotReady_String = 5006,
	Prop_NamedIconPathDeviceStandby_String = 5007,
	Prop_NamedIconPathDeviceAlertLow_String = 5008,
	Prop_NamedIconPathDeviceStandbyAlert_String = 5009,
	Prop_DisplayHiddenArea_Binary_Start = 5100,
	Prop_DisplayHiddenArea_Binary_End = 5150,
	Prop_ParentContainer = 5151,
	Prop_OverrideContainer_Uint64 = 5152,
	Prop_UserConfigPath_String = 6000,
	Prop_InstallPath_String = 6001,
	Prop_HasDisplayComponent_Bool = 6002,
	Prop_HasControllerComponent_Bool = 6003,
	Prop_HasCameraComponent_Bool = 6004,
	Prop_HasDriverDirectModeComponent_Bool = 6005,
	Prop_HasVirtualDisplayComponent_Bool = 6006,
	Prop_HasSpatialAnchorsSupport_Bool = 6007,
	Prop_ControllerType_String = 7000,
	Prop_ControllerHandSelectionPriority_Int32 = 7002,
	Prop_VendorSpecific_Reserved_Start = 10000,
	Prop_VendorSpecific_Reserved_End = 10999,
	Prop_TrackedDeviceProperty_Max = 1000000,
}
export enum ETrackedPropertyError {
	TrackedProp_Success = 0,
	TrackedProp_WrongDataType = 1,
	TrackedProp_WrongDeviceClass = 2,
	TrackedProp_BufferTooSmall = 3,
	TrackedProp_UnknownProperty = 4,
	TrackedProp_InvalidDevice = 5,
	TrackedProp_CouldNotContactServer = 6,
	TrackedProp_ValueNotProvidedByDevice = 7,
	TrackedProp_StringExceedsMaximumLength = 8,
	TrackedProp_NotYetAvailable = 9,
	TrackedProp_PermissionDenied = 10,
	TrackedProp_InvalidOperation = 11,
	TrackedProp_CannotWriteToWildcards = 12,
	TrackedProp_IPCReadFailure = 13,
	TrackedProp_OutOfMemory = 14,
	TrackedProp_InvalidContainer = 15,
}
export enum EHmdTrackingStyle {
	HmdTrackingStyle_Unknown = 0,
	HmdTrackingStyle_Lighthouse = 1,
	HmdTrackingStyle_OutsideInCameras = 2,
	HmdTrackingStyle_InsideOutCameras = 3,
}
export enum EVRSubmitFlags {
	Submit_Default = 0,
	Submit_LensDistortionAlreadyApplied = 1,
	Submit_GlRenderBuffer = 2,
	Submit_Reserved = 4,
	Submit_TextureWithPose = 8,
	Submit_TextureWithDepth = 16,
	Submit_FrameDiscontinuty = 32,
	Submit_VulkanTextureWithArrayData = 64,
	Submit_GlArrayTexture = 128,
	Submit_Reserved2 = 32768,
	Submit_Reserved3 = 65536,
}
export enum EVRState {
	VRState_Undefined = -1,
	VRState_Off = 0,
	VRState_Searching = 1,
	VRState_Searching_Alert = 2,
	VRState_Ready = 3,
	VRState_Ready_Alert = 4,
	VRState_NotReady = 5,
	VRState_Standby = 6,
	VRState_Ready_Alert_Low = 7,
}
export enum EVREventType {
	VREvent_None = 0,
	VREvent_TrackedDeviceActivated = 100,
	VREvent_TrackedDeviceDeactivated = 101,
	VREvent_TrackedDeviceUpdated = 102,
	VREvent_TrackedDeviceUserInteractionStarted = 103,
	VREvent_TrackedDeviceUserInteractionEnded = 104,
	VREvent_IpdChanged = 105,
	VREvent_EnterStandbyMode = 106,
	VREvent_LeaveStandbyMode = 107,
	VREvent_TrackedDeviceRoleChanged = 108,
	VREvent_WatchdogWakeUpRequested = 109,
	VREvent_LensDistortionChanged = 110,
	VREvent_PropertyChanged = 111,
	VREvent_WirelessDisconnect = 112,
	VREvent_WirelessReconnect = 113,
	VREvent_ButtonPress = 200,
	VREvent_ButtonUnpress = 201,
	VREvent_ButtonTouch = 202,
	VREvent_ButtonUntouch = 203,
	VREvent_Modal_Cancel = 257,
	VREvent_MouseMove = 300,
	VREvent_MouseButtonDown = 301,
	VREvent_MouseButtonUp = 302,
	VREvent_FocusEnter = 303,
	VREvent_FocusLeave = 304,
	VREvent_ScrollDiscrete = 305,
	VREvent_TouchPadMove = 306,
	VREvent_OverlayFocusChanged = 307,
	VREvent_ReloadOverlays = 308,
	VREvent_ScrollSmooth = 309,
	VREvent_LockMousePosition = 310,
	VREvent_UnlockMousePosition = 311,
	VREvent_InputFocusCaptured = 400,
	VREvent_InputFocusReleased = 401,
	VREvent_SceneApplicationChanged = 404,
	VREvent_SceneFocusChanged = 405,
	VREvent_InputFocusChanged = 406,
	VREvent_SceneApplicationUsingWrongGraphicsAdapter = 408,
	VREvent_ActionBindingReloaded = 409,
	VREvent_HideRenderModels = 410,
	VREvent_ShowRenderModels = 411,
	VREvent_SceneApplicationStateChanged = 412,
	VREvent_ConsoleOpened = 420,
	VREvent_ConsoleClosed = 421,
	VREvent_OverlayShown = 500,
	VREvent_OverlayHidden = 501,
	VREvent_DashboardActivated = 502,
	VREvent_DashboardDeactivated = 503,
	VREvent_DashboardRequested = 505,
	VREvent_ResetDashboard = 506,
	VREvent_ImageLoaded = 508,
	VREvent_ShowKeyboard = 509,
	VREvent_HideKeyboard = 510,
	VREvent_OverlayGamepadFocusGained = 511,
	VREvent_OverlayGamepadFocusLost = 512,
	VREvent_OverlaySharedTextureChanged = 513,
	VREvent_ScreenshotTriggered = 516,
	VREvent_ImageFailed = 517,
	VREvent_DashboardOverlayCreated = 518,
	VREvent_SwitchGamepadFocus = 519,
	VREvent_RequestScreenshot = 520,
	VREvent_ScreenshotTaken = 521,
	VREvent_ScreenshotFailed = 522,
	VREvent_SubmitScreenshotToDashboard = 523,
	VREvent_ScreenshotProgressToDashboard = 524,
	VREvent_PrimaryDashboardDeviceChanged = 525,
	VREvent_RoomViewShown = 526,
	VREvent_RoomViewHidden = 527,
	VREvent_ShowUI = 528,
	VREvent_ShowDevTools = 529,
	VREvent_DesktopViewUpdating = 530,
	VREvent_DesktopViewReady = 531,
	VREvent_StartDashboard = 532,
	VREvent_ElevatePrism = 533,
	VREvent_OverlayClosed = 534,
	VREvent_Notification_Shown = 600,
	VREvent_Notification_Hidden = 601,
	VREvent_Notification_BeginInteraction = 602,
	VREvent_Notification_Destroyed = 603,
	VREvent_Quit = 700,
	VREvent_ProcessQuit = 701,
	VREvent_QuitAcknowledged = 703,
	VREvent_DriverRequestedQuit = 704,
	VREvent_RestartRequested = 705,
	VREvent_InvalidateSwapTextureSets = 706,
	VREvent_ChaperoneDataHasChanged = 800,
	VREvent_ChaperoneUniverseHasChanged = 801,
	VREvent_ChaperoneTempDataHasChanged = 802,
	VREvent_ChaperoneSettingsHaveChanged = 803,
	VREvent_SeatedZeroPoseReset = 804,
	VREvent_ChaperoneFlushCache = 805,
	VREvent_ChaperoneRoomSetupStarting = 806,
	VREvent_ChaperoneRoomSetupFinished = 807,
	VREvent_StandingZeroPoseReset = 808,
	VREvent_AudioSettingsHaveChanged = 820,
	VREvent_BackgroundSettingHasChanged = 850,
	VREvent_CameraSettingsHaveChanged = 851,
	VREvent_ReprojectionSettingHasChanged = 852,
	VREvent_ModelSkinSettingsHaveChanged = 853,
	VREvent_EnvironmentSettingsHaveChanged = 854,
	VREvent_PowerSettingsHaveChanged = 855,
	VREvent_EnableHomeAppSettingsHaveChanged = 856,
	VREvent_SteamVRSectionSettingChanged = 857,
	VREvent_LighthouseSectionSettingChanged = 858,
	VREvent_NullSectionSettingChanged = 859,
	VREvent_UserInterfaceSectionSettingChanged = 860,
	VREvent_NotificationsSectionSettingChanged = 861,
	VREvent_KeyboardSectionSettingChanged = 862,
	VREvent_PerfSectionSettingChanged = 863,
	VREvent_DashboardSectionSettingChanged = 864,
	VREvent_WebInterfaceSectionSettingChanged = 865,
	VREvent_TrackersSectionSettingChanged = 866,
	VREvent_LastKnownSectionSettingChanged = 867,
	VREvent_DismissedWarningsSectionSettingChanged = 868,
	VREvent_GpuSpeedSectionSettingChanged = 869,
	VREvent_WindowsMRSectionSettingChanged = 870,
	VREvent_OtherSectionSettingChanged = 871,
	VREvent_StatusUpdate = 900,
	VREvent_WebInterface_InstallDriverCompleted = 950,
	VREvent_MCImageUpdated = 1000,
	VREvent_FirmwareUpdateStarted = 1100,
	VREvent_FirmwareUpdateFinished = 1101,
	VREvent_KeyboardClosed = 1200,
	VREvent_KeyboardCharInput = 1201,
	VREvent_KeyboardDone = 1202,
	VREvent_ApplicationListUpdated = 1303,
	VREvent_ApplicationMimeTypeLoad = 1304,
	VREvent_ProcessConnected = 1306,
	VREvent_ProcessDisconnected = 1307,
	VREvent_Compositor_ChaperoneBoundsShown = 1410,
	VREvent_Compositor_ChaperoneBoundsHidden = 1411,
	VREvent_Compositor_DisplayDisconnected = 1412,
	VREvent_Compositor_DisplayReconnected = 1413,
	VREvent_Compositor_HDCPError = 1414,
	VREvent_Compositor_ApplicationNotResponding = 1415,
	VREvent_Compositor_ApplicationResumed = 1416,
	VREvent_Compositor_OutOfVideoMemory = 1417,
	VREvent_Compositor_DisplayModeNotSupported = 1418,
	VREvent_Compositor_StageOverrideReady = 1419,
	VREvent_Compositor_RequestDisconnectReconnect = 1420,
	VREvent_TrackedCamera_StartVideoStream = 1500,
	VREvent_TrackedCamera_StopVideoStream = 1501,
	VREvent_TrackedCamera_PauseVideoStream = 1502,
	VREvent_TrackedCamera_ResumeVideoStream = 1503,
	VREvent_TrackedCamera_EditingSurface = 1550,
	VREvent_PerformanceTest_EnableCapture = 1600,
	VREvent_PerformanceTest_DisableCapture = 1601,
	VREvent_PerformanceTest_FidelityLevel = 1602,
	VREvent_MessageOverlay_Closed = 1650,
	VREvent_MessageOverlayCloseRequested = 1651,
	VREvent_Input_HapticVibration = 1700,
	VREvent_Input_BindingLoadFailed = 1701,
	VREvent_Input_BindingLoadSuccessful = 1702,
	VREvent_Input_ActionManifestReloaded = 1703,
	VREvent_Input_ActionManifestLoadFailed = 1704,
	VREvent_Input_ProgressUpdate = 1705,
	VREvent_Input_TrackerActivated = 1706,
	VREvent_Input_BindingsUpdated = 1707,
	VREvent_Input_BindingSubscriptionChanged = 1708,
	VREvent_SpatialAnchors_PoseUpdated = 1800,
	VREvent_SpatialAnchors_DescriptorUpdated = 1801,
	VREvent_SpatialAnchors_RequestPoseUpdate = 1802,
	VREvent_SpatialAnchors_RequestDescriptorUpdate = 1803,
	VREvent_SystemReport_Started = 1900,
	VREvent_Monitor_ShowHeadsetView = 2000,
	VREvent_Monitor_HideHeadsetView = 2001,
	VREvent_VendorSpecific_Reserved_Start = 10000,
	VREvent_VendorSpecific_Reserved_End = 19999,
}
export enum EDeviceActivityLevel {
	k_EDeviceActivityLevel_Unknown = -1,
	k_EDeviceActivityLevel_Idle = 0,
	k_EDeviceActivityLevel_UserInteraction = 1,
	k_EDeviceActivityLevel_UserInteraction_Timeout = 2,
	k_EDeviceActivityLevel_Standby = 3,
	k_EDeviceActivityLevel_Idle_Timeout = 4,
}
export enum EVRButtonId {
	k_EButton_System = 0,
	k_EButton_ApplicationMenu = 1,
	k_EButton_Grip = 2,
	k_EButton_DPad_Left = 3,
	k_EButton_DPad_Up = 4,
	k_EButton_DPad_Right = 5,
	k_EButton_DPad_Down = 6,
	k_EButton_A = 7,
	k_EButton_ProximitySensor = 31,
	k_EButton_Axis0 = 32,
	k_EButton_Axis1 = 33,
	k_EButton_Axis2 = 34,
	k_EButton_Axis3 = 35,
	k_EButton_Axis4 = 36,
	k_EButton_SteamVR_Touchpad = 32,
	k_EButton_SteamVR_Trigger = 33,
	k_EButton_Dashboard_Back = 2,
	k_EButton_IndexController_A = 2,
	k_EButton_IndexController_B = 1,
	k_EButton_IndexController_JoyStick = 35,
	k_EButton_Max = 64,
}
export enum EVRMouseButton {
	VRMouseButton_Left = 1,
	VRMouseButton_Right = 2,
	VRMouseButton_Middle = 4,
}
export enum EShowUIType {
	ShowUI_ControllerBinding = 0,
	ShowUI_ManageTrackers = 1,
	ShowUI_Pairing = 3,
	ShowUI_Settings = 4,
	ShowUI_DebugCommands = 5,
	ShowUI_FullControllerBinding = 6,
	ShowUI_ManageDrivers = 7,
}
export enum EHDCPError {
	HDCPError_None = 0,
	HDCPError_LinkLost = 1,
	HDCPError_Tampered = 2,
	HDCPError_DeviceRevoked = 3,
	HDCPError_Unknown = 4,
}
export enum EVRComponentProperty {
	VRComponentProperty_IsStatic = 1,
	VRComponentProperty_IsVisible = 2,
	VRComponentProperty_IsTouched = 4,
	VRComponentProperty_IsPressed = 8,
	VRComponentProperty_IsScrolled = 16,
	VRComponentProperty_IsHighlighted = 32,
}
export enum EVRInputError {
	VRInputError_None = 0,
	VRInputError_NameNotFound = 1,
	VRInputError_WrongType = 2,
	VRInputError_InvalidHandle = 3,
	VRInputError_InvalidParam = 4,
	VRInputError_NoSteam = 5,
	VRInputError_MaxCapacityReached = 6,
	VRInputError_IPCError = 7,
	VRInputError_NoActiveActionSet = 8,
	VRInputError_InvalidDevice = 9,
	VRInputError_InvalidSkeleton = 10,
	VRInputError_InvalidBoneCount = 11,
	VRInputError_InvalidCompressedData = 12,
	VRInputError_NoData = 13,
	VRInputError_BufferTooSmall = 14,
	VRInputError_MismatchedActionManifest = 15,
	VRInputError_MissingSkeletonData = 16,
	VRInputError_InvalidBoneIndex = 17,
	VRInputError_InvalidPriority = 18,
	VRInputError_PermissionDenied = 19,
	VRInputError_InvalidRenderModel = 20,
}
export enum EVRSpatialAnchorError {
	VRSpatialAnchorError_Success = 0,
	VRSpatialAnchorError_Internal = 1,
	VRSpatialAnchorError_UnknownHandle = 2,
	VRSpatialAnchorError_ArrayTooSmall = 3,
	VRSpatialAnchorError_InvalidDescriptorChar = 4,
	VRSpatialAnchorError_NotYetAvailable = 5,
	VRSpatialAnchorError_NotAvailableInThisUniverse = 6,
	VRSpatialAnchorError_PermanentlyUnavailable = 7,
	VRSpatialAnchorError_WrongDriver = 8,
	VRSpatialAnchorError_DescriptorTooLong = 9,
	VRSpatialAnchorError_Unknown = 10,
	VRSpatialAnchorError_NoRoomCalibration = 11,
	VRSpatialAnchorError_InvalidArgument = 12,
	VRSpatialAnchorError_UnknownDriver = 13,
}
export enum EHiddenAreaMeshType {
	k_eHiddenAreaMesh_Standard = 0,
	k_eHiddenAreaMesh_Inverse = 1,
	k_eHiddenAreaMesh_LineLoop = 2,
	k_eHiddenAreaMesh_Max = 3,
}
export enum EVRControllerAxisType {
	k_eControllerAxis_None = 0,
	k_eControllerAxis_TrackPad = 1,
	k_eControllerAxis_Joystick = 2,
	k_eControllerAxis_Trigger = 3,
}
export enum EVRControllerEventOutputType {
	ControllerEventOutput_OSEvents = 0,
	ControllerEventOutput_VREvents = 1,
}
export enum ECollisionBoundsStyle {
	COLLISION_BOUNDS_STYLE_BEGINNER = 0,
	COLLISION_BOUNDS_STYLE_INTERMEDIATE = 1,
	COLLISION_BOUNDS_STYLE_SQUARES = 2,
	COLLISION_BOUNDS_STYLE_ADVANCED = 3,
	COLLISION_BOUNDS_STYLE_NONE = 4,
	COLLISION_BOUNDS_STYLE_COUNT = 5,
}
export enum EVROverlayError {
	VROverlayError_None = 0,
	VROverlayError_UnknownOverlay = 10,
	VROverlayError_InvalidHandle = 11,
	VROverlayError_PermissionDenied = 12,
	VROverlayError_OverlayLimitExceeded = 13,
	VROverlayError_WrongVisibilityType = 14,
	VROverlayError_KeyTooLong = 15,
	VROverlayError_NameTooLong = 16,
	VROverlayError_KeyInUse = 17,
	VROverlayError_WrongTransformType = 18,
	VROverlayError_InvalidTrackedDevice = 19,
	VROverlayError_InvalidParameter = 20,
	VROverlayError_ThumbnailCantBeDestroyed = 21,
	VROverlayError_ArrayTooSmall = 22,
	VROverlayError_RequestFailed = 23,
	VROverlayError_InvalidTexture = 24,
	VROverlayError_UnableToLoadFile = 25,
	VROverlayError_KeyboardAlreadyInUse = 26,
	VROverlayError_NoNeighbor = 27,
	VROverlayError_TooManyMaskPrimitives = 29,
	VROverlayError_BadMaskPrimitive = 30,
	VROverlayError_TextureAlreadyLocked = 31,
	VROverlayError_TextureLockCapacityReached = 32,
	VROverlayError_TextureNotLocked = 33,
	VROverlayError_TimedOut = 34,
}
export enum EVRApplicationType {
	VRApplication_Other = 0,
	VRApplication_Scene = 1,
	VRApplication_Overlay = 2,
	VRApplication_Background = 3,
	VRApplication_Utility = 4,
	VRApplication_VRMonitor = 5,
	VRApplication_SteamWatchdog = 6,
	VRApplication_Bootstrapper = 7,
	VRApplication_WebHelper = 8,
	VRApplication_OpenXRInstance = 9,
	VRApplication_OpenXRScene = 10,
	VRApplication_OpenXROverlay = 11,
	VRApplication_Prism = 12,
	VRApplication_RoomView = 13,
	VRApplication_Max = 14,
}
export enum EVRFirmwareError {
	VRFirmwareError_None = 0,
	VRFirmwareError_Success = 1,
	VRFirmwareError_Fail = 2,
}
export enum EVRNotificationError {
	VRNotificationError_OK = 0,
	VRNotificationError_InvalidNotificationId = 100,
	VRNotificationError_NotificationQueueFull = 101,
	VRNotificationError_InvalidOverlayHandle = 102,
	VRNotificationError_SystemWithUserValueAlreadyExists = 103,
}
export enum EVRSkeletalMotionRange {
	VRSkeletalMotionRange_WithController = 0,
	VRSkeletalMotionRange_WithoutController = 1,
}
export enum EVRSkeletalTrackingLevel {
	VRSkeletalTracking_Estimated = 0,
	VRSkeletalTracking_Partial = 1,
	VRSkeletalTracking_Full = 2,
	VRSkeletalTrackingLevel_Count = 3,
	VRSkeletalTrackingLevel_Max = 2,
}
export enum EVRInitError {
	VRInitError_None = 0,
	VRInitError_Unknown = 1,
	VRInitError_Init_InstallationNotFound = 100,
	VRInitError_Init_InstallationCorrupt = 101,
	VRInitError_Init_VRClientDLLNotFound = 102,
	VRInitError_Init_FileNotFound = 103,
	VRInitError_Init_FactoryNotFound = 104,
	VRInitError_Init_InterfaceNotFound = 105,
	VRInitError_Init_InvalidInterface = 106,
	VRInitError_Init_UserConfigDirectoryInvalid = 107,
	VRInitError_Init_HmdNotFound = 108,
	VRInitError_Init_NotInitialized = 109,
	VRInitError_Init_PathRegistryNotFound = 110,
	VRInitError_Init_NoConfigPath = 111,
	VRInitError_Init_NoLogPath = 112,
	VRInitError_Init_PathRegistryNotWritable = 113,
	VRInitError_Init_AppInfoInitFailed = 114,
	VRInitError_Init_Retry = 115,
	VRInitError_Init_InitCanceledByUser = 116,
	VRInitError_Init_AnotherAppLaunching = 117,
	VRInitError_Init_SettingsInitFailed = 118,
	VRInitError_Init_ShuttingDown = 119,
	VRInitError_Init_TooManyObjects = 120,
	VRInitError_Init_NoServerForBackgroundApp = 121,
	VRInitError_Init_NotSupportedWithCompositor = 122,
	VRInitError_Init_NotAvailableToUtilityApps = 123,
	VRInitError_Init_Internal = 124,
	VRInitError_Init_HmdDriverIdIsNone = 125,
	VRInitError_Init_HmdNotFoundPresenceFailed = 126,
	VRInitError_Init_VRMonitorNotFound = 127,
	VRInitError_Init_VRMonitorStartupFailed = 128,
	VRInitError_Init_LowPowerWatchdogNotSupported = 129,
	VRInitError_Init_InvalidApplicationType = 130,
	VRInitError_Init_NotAvailableToWatchdogApps = 131,
	VRInitError_Init_WatchdogDisabledInSettings = 132,
	VRInitError_Init_VRDashboardNotFound = 133,
	VRInitError_Init_VRDashboardStartupFailed = 134,
	VRInitError_Init_VRHomeNotFound = 135,
	VRInitError_Init_VRHomeStartupFailed = 136,
	VRInitError_Init_RebootingBusy = 137,
	VRInitError_Init_FirmwareUpdateBusy = 138,
	VRInitError_Init_FirmwareRecoveryBusy = 139,
	VRInitError_Init_USBServiceBusy = 140,
	VRInitError_Init_VRWebHelperStartupFailed = 141,
	VRInitError_Init_TrackerManagerInitFailed = 142,
	VRInitError_Init_AlreadyRunning = 143,
	VRInitError_Init_FailedForVrMonitor = 144,
	VRInitError_Init_PropertyManagerInitFailed = 145,
	VRInitError_Init_WebServerFailed = 146,
	VRInitError_Init_IllegalTypeTransition = 147,
	VRInitError_Init_MismatchedRuntimes = 148,
	VRInitError_Init_InvalidProcessId = 149,
	VRInitError_Init_VRServiceStartupFailed = 150,
	VRInitError_Init_PrismNeedsNewDrivers = 151,
	VRInitError_Init_PrismStartupTimedOut = 152,
	VRInitError_Init_CouldNotStartPrism = 153,
	VRInitError_Init_PrismClientInitFailed = 154,
	VRInitError_Init_PrismClientStartFailed = 155,
	VRInitError_Init_PrismExitedUnexpectedly = 156,
	VRInitError_Init_BadLuid = 157,
	VRInitError_Init_NoServerForAppContainer = 158,
	VRInitError_Init_DuplicateBootstrapper = 159,
	VRInitError_Init_VRDashboardServicePending = 160,
	VRInitError_Init_VRDashboardServiceTimeout = 161,
	VRInitError_Init_VRDashboardServiceStopped = 162,
	VRInitError_Init_VRDashboardAlreadyStarted = 163,
	VRInitError_Init_VRDashboardCopyFailed = 164,
	VRInitError_Init_VRDashboardTokenFailure = 165,
	VRInitError_Init_VRDashboardEnvironmentFailure = 166,
	VRInitError_Init_VRDashboardPathFailure = 167,
	VRInitError_Driver_Failed = 200,
	VRInitError_Driver_Unknown = 201,
	VRInitError_Driver_HmdUnknown = 202,
	VRInitError_Driver_NotLoaded = 203,
	VRInitError_Driver_RuntimeOutOfDate = 204,
	VRInitError_Driver_HmdInUse = 205,
	VRInitError_Driver_NotCalibrated = 206,
	VRInitError_Driver_CalibrationInvalid = 207,
	VRInitError_Driver_HmdDisplayNotFound = 208,
	VRInitError_Driver_TrackedDeviceInterfaceUnknown = 209,
	VRInitError_Driver_HmdDriverIdOutOfBounds = 211,
	VRInitError_Driver_HmdDisplayMirrored = 212,
	VRInitError_Driver_HmdDisplayNotFoundLaptop = 213,
	VRInitError_Driver_PeerDriverNotInstalled = 214,
	VRInitError_Driver_WirelessHmdNotConnected = 215,
	VRInitError_IPC_ServerInitFailed = 300,
	VRInitError_IPC_ConnectFailed = 301,
	VRInitError_IPC_SharedStateInitFailed = 302,
	VRInitError_IPC_CompositorInitFailed = 303,
	VRInitError_IPC_MutexInitFailed = 304,
	VRInitError_IPC_Failed = 305,
	VRInitError_IPC_CompositorConnectFailed = 306,
	VRInitError_IPC_CompositorInvalidConnectResponse = 307,
	VRInitError_IPC_ConnectFailedAfterMultipleAttempts = 308,
	VRInitError_IPC_ConnectFailedAfterTargetExited = 309,
	VRInitError_IPC_NamespaceUnavailable = 310,
	VRInitError_Compositor_Failed = 400,
	VRInitError_Compositor_D3D11HardwareRequired = 401,
	VRInitError_Compositor_FirmwareRequiresUpdate = 402,
	VRInitError_Compositor_OverlayInitFailed = 403,
	VRInitError_Compositor_ScreenshotsInitFailed = 404,
	VRInitError_Compositor_UnableToCreateDevice = 405,
	VRInitError_Compositor_SharedStateIsNull = 406,
	VRInitError_Compositor_NotificationManagerIsNull = 407,
	VRInitError_Compositor_ResourceManagerClientIsNull = 408,
	VRInitError_Compositor_MessageOverlaySharedStateInitFailure = 409,
	VRInitError_Compositor_PropertiesInterfaceIsNull = 410,
	VRInitError_Compositor_CreateFullscreenWindowFailed = 411,
	VRInitError_Compositor_SettingsInterfaceIsNull = 412,
	VRInitError_Compositor_FailedToShowWindow = 413,
	VRInitError_Compositor_DistortInterfaceIsNull = 414,
	VRInitError_Compositor_DisplayFrequencyFailure = 415,
	VRInitError_Compositor_RendererInitializationFailed = 416,
	VRInitError_Compositor_DXGIFactoryInterfaceIsNull = 417,
	VRInitError_Compositor_DXGIFactoryCreateFailed = 418,
	VRInitError_Compositor_DXGIFactoryQueryFailed = 419,
	VRInitError_Compositor_InvalidAdapterDesktop = 420,
	VRInitError_Compositor_InvalidHmdAttachment = 421,
	VRInitError_Compositor_InvalidOutputDesktop = 422,
	VRInitError_Compositor_InvalidDeviceProvided = 423,
	VRInitError_Compositor_D3D11RendererInitializationFailed = 424,
	VRInitError_Compositor_FailedToFindDisplayMode = 425,
	VRInitError_Compositor_FailedToCreateSwapChain = 426,
	VRInitError_Compositor_FailedToGetBackBuffer = 427,
	VRInitError_Compositor_FailedToCreateRenderTarget = 428,
	VRInitError_Compositor_FailedToCreateDXGI2SwapChain = 429,
	VRInitError_Compositor_FailedtoGetDXGI2BackBuffer = 430,
	VRInitError_Compositor_FailedToCreateDXGI2RenderTarget = 431,
	VRInitError_Compositor_FailedToGetDXGIDeviceInterface = 432,
	VRInitError_Compositor_SelectDisplayMode = 433,
	VRInitError_Compositor_FailedToCreateNvAPIRenderTargets = 434,
	VRInitError_Compositor_NvAPISetDisplayMode = 435,
	VRInitError_Compositor_FailedToCreateDirectModeDisplay = 436,
	VRInitError_Compositor_InvalidHmdPropertyContainer = 437,
	VRInitError_Compositor_UpdateDisplayFrequency = 438,
	VRInitError_Compositor_CreateRasterizerState = 439,
	VRInitError_Compositor_CreateWireframeRasterizerState = 440,
	VRInitError_Compositor_CreateSamplerState = 441,
	VRInitError_Compositor_CreateClampToBorderSamplerState = 442,
	VRInitError_Compositor_CreateAnisoSamplerState = 443,
	VRInitError_Compositor_CreateOverlaySamplerState = 444,
	VRInitError_Compositor_CreatePanoramaSamplerState = 445,
	VRInitError_Compositor_CreateFontSamplerState = 446,
	VRInitError_Compositor_CreateNoBlendState = 447,
	VRInitError_Compositor_CreateBlendState = 448,
	VRInitError_Compositor_CreateAlphaBlendState = 449,
	VRInitError_Compositor_CreateBlendStateMaskR = 450,
	VRInitError_Compositor_CreateBlendStateMaskG = 451,
	VRInitError_Compositor_CreateBlendStateMaskB = 452,
	VRInitError_Compositor_CreateDepthStencilState = 453,
	VRInitError_Compositor_CreateDepthStencilStateNoWrite = 454,
	VRInitError_Compositor_CreateDepthStencilStateNoDepth = 455,
	VRInitError_Compositor_CreateFlushTexture = 456,
	VRInitError_Compositor_CreateDistortionSurfaces = 457,
	VRInitError_Compositor_CreateConstantBuffer = 458,
	VRInitError_Compositor_CreateHmdPoseConstantBuffer = 459,
	VRInitError_Compositor_CreateHmdPoseStagingConstantBuffer = 460,
	VRInitError_Compositor_CreateSharedFrameInfoConstantBuffer = 461,
	VRInitError_Compositor_CreateOverlayConstantBuffer = 462,
	VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer = 463,
	VRInitError_Compositor_CreateReadableSceneTextureIndexConstantBuffer = 464,
	VRInitError_Compositor_CreateLayerGraphicsTextureIndexConstantBuffer = 465,
	VRInitError_Compositor_CreateLayerComputeTextureIndexConstantBuffer = 466,
	VRInitError_Compositor_CreateLayerComputeSceneTextureIndexConstantBuffer = 467,
	VRInitError_Compositor_CreateComputeHmdPoseConstantBuffer = 468,
	VRInitError_Compositor_CreateGeomConstantBuffer = 469,
	VRInitError_Compositor_CreatePanelMaskConstantBuffer = 470,
	VRInitError_Compositor_CreatePixelSimUBO = 471,
	VRInitError_Compositor_CreateMSAARenderTextures = 472,
	VRInitError_Compositor_CreateResolveRenderTextures = 473,
	VRInitError_Compositor_CreateComputeResolveRenderTextures = 474,
	VRInitError_Compositor_CreateDriverDirectModeResolveTextures = 475,
	VRInitError_Compositor_OpenDriverDirectModeResolveTextures = 476,
	VRInitError_Compositor_CreateFallbackSyncTexture = 477,
	VRInitError_Compositor_ShareFallbackSyncTexture = 478,
	VRInitError_Compositor_CreateOverlayIndexBuffer = 479,
	VRInitError_Compositor_CreateOverlayVertexBuffer = 480,
	VRInitError_Compositor_CreateTextVertexBuffer = 481,
	VRInitError_Compositor_CreateTextIndexBuffer = 482,
	VRInitError_Compositor_CreateMirrorTextures = 483,
	VRInitError_Compositor_CreateLastFrameRenderTexture = 484,
	VRInitError_Compositor_CreateMirrorOverlay = 485,
	VRInitError_Compositor_FailedToCreateVirtualDisplayBackbuffer = 486,
	VRInitError_Compositor_DisplayModeNotSupported = 487,
	VRInitError_Compositor_CreateOverlayInvalidCall = 488,
	VRInitError_Compositor_CreateOverlayAlreadyInitialized = 489,
	VRInitError_Compositor_FailedToCreateMailbox = 490,
	VRInitError_Compositor_WindowInterfaceIsNull = 491,
	VRInitError_Compositor_SystemLayerCreateInstance = 492,
	VRInitError_Compositor_SystemLayerCreateSession = 493,
	VRInitError_Compositor_CreateInverseDistortUVs = 494,
	VRInitError_Compositor_CreateBackbufferDepth = 495,
	VRInitError_VendorSpecific_UnableToConnectToOculusRuntime = 1000,
	VRInitError_VendorSpecific_WindowsNotInDevMode = 1001,
	VRInitError_VendorSpecific_OculusLinkNotEnabled = 1002,
	VRInitError_VendorSpecific_HmdFound_CantOpenDevice = 1101,
	VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart = 1102,
	VRInitError_VendorSpecific_HmdFound_NoStoredConfig = 1103,
	VRInitError_VendorSpecific_HmdFound_ConfigTooBig = 1104,
	VRInitError_VendorSpecific_HmdFound_ConfigTooSmall = 1105,
	VRInitError_VendorSpecific_HmdFound_UnableToInitZLib = 1106,
	VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion = 1107,
	VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart = 1108,
	VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart = 1109,
	VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext = 1110,
	VRInitError_VendorSpecific_HmdFound_UserDataAddressRange = 1111,
	VRInitError_VendorSpecific_HmdFound_UserDataError = 1112,
	VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck = 1113,
	VRInitError_VendorSpecific_OculusRuntimeBadInstall = 1114,
	VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1 = 1115,
	VRInitError_Steam_SteamInstallationNotFound = 2000,
	VRInitError_LastError = 2001,
}
export enum EVRScreenshotType {
	VRScreenshotType_None = 0,
	VRScreenshotType_Mono = 1,
	VRScreenshotType_Stereo = 2,
	VRScreenshotType_Cubemap = 3,
	VRScreenshotType_MonoPanorama = 4,
	VRScreenshotType_StereoPanorama = 5,
}
export enum EVRScreenshotPropertyFilenames {
	VRScreenshotPropertyFilenames_Preview = 0,
	VRScreenshotPropertyFilenames_VR = 1,
}
export enum EVRTrackedCameraError {
	VRTrackedCameraError_None = 0,
	VRTrackedCameraError_OperationFailed = 100,
	VRTrackedCameraError_InvalidHandle = 101,
	VRTrackedCameraError_InvalidFrameHeaderVersion = 102,
	VRTrackedCameraError_OutOfHandles = 103,
	VRTrackedCameraError_IPCFailure = 104,
	VRTrackedCameraError_NotSupportedForThisDevice = 105,
	VRTrackedCameraError_SharedMemoryFailure = 106,
	VRTrackedCameraError_FrameBufferingFailure = 107,
	VRTrackedCameraError_StreamSetupFailure = 108,
	VRTrackedCameraError_InvalidGLTextureId = 109,
	VRTrackedCameraError_InvalidSharedTextureHandle = 110,
	VRTrackedCameraError_FailedToGetGLTextureId = 111,
	VRTrackedCameraError_SharedTextureFailure = 112,
	VRTrackedCameraError_NoFrameAvailable = 113,
	VRTrackedCameraError_InvalidArgument = 114,
	VRTrackedCameraError_InvalidFrameBufferSize = 115,
}
export enum EVRTrackedCameraFrameLayout {
	EVRTrackedCameraFrameLayout_Mono = 1,
	EVRTrackedCameraFrameLayout_Stereo = 2,
	EVRTrackedCameraFrameLayout_VerticalLayout = 16,
	EVRTrackedCameraFrameLayout_HorizontalLayout = 32,
}
export enum EVRTrackedCameraFrameType {
	VRTrackedCameraFrameType_Distorted = 0,
	VRTrackedCameraFrameType_Undistorted = 1,
	VRTrackedCameraFrameType_MaximumUndistorted = 2,
	MAX_CAMERA_FRAME_TYPES = 3,
}
export enum EVRDistortionFunctionType {
	VRDistortionFunctionType_None = 0,
	VRDistortionFunctionType_FTheta = 1,
	VRDistortionFunctionType_Extended_FTheta = 2,
	MAX_DISTORTION_FUNCTION_TYPES = 3,
}
export enum EVSync {
	VSync_None = 0,
	VSync_WaitRender = 1,
	VSync_NoWaitRender = 2,
}
export enum EVRMuraCorrectionMode {
	EVRMuraCorrectionMode_Default = 0,
	EVRMuraCorrectionMode_NoCorrection = 1,
}
export enum Imu_OffScaleFlags {
	OffScale_AccelX = 1,
	OffScale_AccelY = 2,
	OffScale_AccelZ = 4,
	OffScale_GyroX = 8,
	OffScale_GyroY = 16,
	OffScale_GyroZ = 32,
}
export enum EVRApplicationError {
	VRApplicationError_None = 0,
	VRApplicationError_AppKeyAlreadyExists = 100,
	VRApplicationError_NoManifest = 101,
	VRApplicationError_NoApplication = 102,
	VRApplicationError_InvalidIndex = 103,
	VRApplicationError_UnknownApplication = 104,
	VRApplicationError_IPCFailed = 105,
	VRApplicationError_ApplicationAlreadyRunning = 106,
	VRApplicationError_InvalidManifest = 107,
	VRApplicationError_InvalidApplication = 108,
	VRApplicationError_LaunchFailed = 109,
	VRApplicationError_ApplicationAlreadyStarting = 110,
	VRApplicationError_LaunchInProgress = 111,
	VRApplicationError_OldApplicationQuitting = 112,
	VRApplicationError_TransitionAborted = 113,
	VRApplicationError_IsTemplate = 114,
	VRApplicationError_SteamVRIsExiting = 115,
	VRApplicationError_BufferTooSmall = 200,
	VRApplicationError_PropertyNotSet = 201,
	VRApplicationError_UnknownProperty = 202,
	VRApplicationError_InvalidParameter = 203,
	VRApplicationError_NotImplemented = 300,
}
export enum EVRApplicationProperty {
	VRApplicationProperty_Name_String = 0,
	VRApplicationProperty_LaunchType_String = 11,
	VRApplicationProperty_WorkingDirectory_String = 12,
	VRApplicationProperty_BinaryPath_String = 13,
	VRApplicationProperty_Arguments_String = 14,
	VRApplicationProperty_URL_String = 15,
	VRApplicationProperty_Description_String = 50,
	VRApplicationProperty_NewsURL_String = 51,
	VRApplicationProperty_ImagePath_String = 52,
	VRApplicationProperty_Source_String = 53,
	VRApplicationProperty_ActionManifestURL_String = 54,
	VRApplicationProperty_IsDashboardOverlay_Bool = 60,
	VRApplicationProperty_IsTemplate_Bool = 61,
	VRApplicationProperty_IsInstanced_Bool = 62,
	VRApplicationProperty_IsInternal_Bool = 63,
	VRApplicationProperty_WantsCompositorPauseInStandby_Bool = 64,
	VRApplicationProperty_IsHidden_Bool = 65,
	VRApplicationProperty_LastLaunchTime_Uint64 = 70,
}
export enum EVRSceneApplicationState {
	EVRSceneApplicationState_None = 0,
	EVRSceneApplicationState_Starting = 1,
	EVRSceneApplicationState_Quitting = 2,
	EVRSceneApplicationState_Running = 3,
	EVRSceneApplicationState_Waiting = 4,
}
export enum ChaperoneCalibrationState {
	ChaperoneCalibrationState_OK = 1,
	ChaperoneCalibrationState_Warning = 100,
	ChaperoneCalibrationState_Warning_BaseStationMayHaveMoved = 101,
	ChaperoneCalibrationState_Warning_BaseStationRemoved = 102,
	ChaperoneCalibrationState_Warning_SeatedBoundsInvalid = 103,
	ChaperoneCalibrationState_Error = 200,
	ChaperoneCalibrationState_Error_BaseStationUninitialized = 201,
	ChaperoneCalibrationState_Error_BaseStationConflict = 202,
	ChaperoneCalibrationState_Error_PlayAreaInvalid = 203,
	ChaperoneCalibrationState_Error_CollisionBoundsInvalid = 204,
}
export enum EChaperoneConfigFile {
	EChaperoneConfigFile_Live = 1,
	EChaperoneConfigFile_Temp = 2,
}
export enum EChaperoneImportFlags {
	EChaperoneImport_BoundsOnly = 1,
}
export enum EVRCompositorError {
	VRCompositorError_None = 0,
	VRCompositorError_RequestFailed = 1,
	VRCompositorError_IncompatibleVersion = 100,
	VRCompositorError_DoNotHaveFocus = 101,
	VRCompositorError_InvalidTexture = 102,
	VRCompositorError_IsNotSceneApplication = 103,
	VRCompositorError_TextureIsOnWrongDevice = 104,
	VRCompositorError_TextureUsesUnsupportedFormat = 105,
	VRCompositorError_SharedTexturesNotSupported = 106,
	VRCompositorError_IndexOutOfRange = 107,
	VRCompositorError_AlreadySubmitted = 108,
	VRCompositorError_InvalidBounds = 109,
	VRCompositorError_AlreadySet = 110,
}
export enum EVRCompositorTimingMode {
	VRCompositorTimingMode_Implicit = 0,
	VRCompositorTimingMode_Explicit_RuntimePerformsPostPresentHandoff = 1,
	VRCompositorTimingMode_Explicit_ApplicationPerformsPostPresentHandoff = 2,
}
export enum VROverlayInputMethod {
	VROverlayInputMethod_None = 0,
	VROverlayInputMethod_Mouse = 1,
}
export enum VROverlayTransformType {
	VROverlayTransform_Invalid = -1,
	VROverlayTransform_Absolute = 0,
	VROverlayTransform_TrackedDeviceRelative = 1,
	VROverlayTransform_SystemOverlay = 2,
	VROverlayTransform_TrackedComponent = 3,
	VROverlayTransform_Cursor = 4,
	VROverlayTransform_DashboardTab = 5,
	VROverlayTransform_DashboardThumb = 6,
	VROverlayTransform_Mountable = 7,
	VROverlayTransform_Projection = 8,
}
export enum VROverlayFlags {
	VROverlayFlags_NoDashboardTab = 8,
	VROverlayFlags_SendVRDiscreteScrollEvents = 64,
	VROverlayFlags_SendVRTouchpadEvents = 128,
	VROverlayFlags_ShowTouchPadScrollWheel = 256,
	VROverlayFlags_TransferOwnershipToInternalProcess = 512,
	VROverlayFlags_SideBySide_Parallel = 1024,
	VROverlayFlags_SideBySide_Crossed = 2048,
	VROverlayFlags_Panorama = 4096,
	VROverlayFlags_StereoPanorama = 8192,
	VROverlayFlags_SortWithNonSceneOverlays = 16384,
	VROverlayFlags_VisibleInDashboard = 32768,
	VROverlayFlags_MakeOverlaysInteractiveIfVisible = 65536,
	VROverlayFlags_SendVRSmoothScrollEvents = 131072,
	VROverlayFlags_ProtectedContent = 262144,
	VROverlayFlags_HideLaserIntersection = 524288,
	VROverlayFlags_WantsModalBehavior = 1048576,
	VROverlayFlags_IsPremultiplied = 2097152,
	VROverlayFlags_IgnoreTextureAlpha = 4194304,
}
export enum VRMessageOverlayResponse {
	VRMessageOverlayResponse_ButtonPress_0 = 0,
	VRMessageOverlayResponse_ButtonPress_1 = 1,
	VRMessageOverlayResponse_ButtonPress_2 = 2,
	VRMessageOverlayResponse_ButtonPress_3 = 3,
	VRMessageOverlayResponse_CouldntFindSystemOverlay = 4,
	VRMessageOverlayResponse_CouldntFindOrCreateClientOverlay = 5,
	VRMessageOverlayResponse_ApplicationQuit = 6,
}
export enum EGamepadTextInputMode {
	k_EGamepadTextInputModeNormal = 0,
	k_EGamepadTextInputModePassword = 1,
	k_EGamepadTextInputModeSubmit = 2,
}
export enum EGamepadTextInputLineMode {
	k_EGamepadTextInputLineModeSingleLine = 0,
	k_EGamepadTextInputLineModeMultipleLines = 1,
}
export enum EVROverlayIntersectionMaskPrimitiveType {
	OverlayIntersectionPrimitiveType_Rectangle = 0,
	OverlayIntersectionPrimitiveType_Circle = 1,
}
export enum EKeyboardFlags {
	KeyboardFlag_Minimal = 1,
	KeyboardFlag_Modal = 2,
}
export enum EDeviceType {
	DeviceType_Invalid = -1,
	DeviceType_DirectX11 = 0,
	DeviceType_Vulkan = 1,
}
export enum HeadsetViewMode_t {
	HeadsetViewMode_Left = 0,
	HeadsetViewMode_Right = 1,
	HeadsetViewMode_Both = 2,
}
export enum EVRRenderModelError {
	VRRenderModelError_None = 0,
	VRRenderModelError_Loading = 100,
	VRRenderModelError_NotSupported = 200,
	VRRenderModelError_InvalidArg = 300,
	VRRenderModelError_InvalidModel = 301,
	VRRenderModelError_NoShapes = 302,
	VRRenderModelError_MultipleShapes = 303,
	VRRenderModelError_TooManyVertices = 304,
	VRRenderModelError_MultipleTextures = 305,
	VRRenderModelError_BufferTooSmall = 306,
	VRRenderModelError_NotEnoughNormals = 307,
	VRRenderModelError_NotEnoughTexCoords = 308,
	VRRenderModelError_InvalidTexture = 400,
}
export enum EVRRenderModelTextureFormat {
	VRRenderModelTextureFormat_RGBA8_SRGB = 0,
	VRRenderModelTextureFormat_BC2 = 1,
	VRRenderModelTextureFormat_BC4 = 2,
	VRRenderModelTextureFormat_BC7 = 3,
	VRRenderModelTextureFormat_BC7_SRGB = 4,
	VRRenderModelTextureFormat_RGBA16_FLOAT = 5,
}
export enum EVRNotificationType {
	EVRNotificationType_Transient = 0,
	EVRNotificationType_Persistent = 1,
	EVRNotificationType_Transient_SystemWithUserValue = 2,
}
export enum EVRNotificationStyle {
	EVRNotificationStyle_None = 0,
	EVRNotificationStyle_Application = 100,
	EVRNotificationStyle_Contact_Disabled = 200,
	EVRNotificationStyle_Contact_Enabled = 201,
	EVRNotificationStyle_Contact_Active = 202,
}
export enum EVRSettingsError {
	VRSettingsError_None = 0,
	VRSettingsError_IPCFailed = 1,
	VRSettingsError_WriteFailed = 2,
	VRSettingsError_ReadFailed = 3,
	VRSettingsError_JsonParseFailed = 4,
	VRSettingsError_UnsetSettingHasNoDefault = 5,
}
export enum EVRScreenshotError {
	VRScreenshotError_None = 0,
	VRScreenshotError_RequestFailed = 1,
	VRScreenshotError_IncompatibleVersion = 100,
	VRScreenshotError_NotFound = 101,
	VRScreenshotError_BufferTooSmall = 102,
	VRScreenshotError_ScreenshotAlreadyInProgress = 108,
}
export enum EVRSkeletalTransformSpace {
	VRSkeletalTransformSpace_Model = 0,
	VRSkeletalTransformSpace_Parent = 1,
}
export enum EVRSkeletalReferencePose {
	VRSkeletalReferencePose_BindPose = 0,
	VRSkeletalReferencePose_OpenHand = 1,
	VRSkeletalReferencePose_Fist = 2,
	VRSkeletalReferencePose_GripLimit = 3,
}
export enum EVRFinger {
	VRFinger_Thumb = 0,
	VRFinger_Index = 1,
	VRFinger_Middle = 2,
	VRFinger_Ring = 3,
	VRFinger_Pinky = 4,
	VRFinger_Count = 5,
}
export enum EVRFingerSplay {
	VRFingerSplay_Thumb_Index = 0,
	VRFingerSplay_Index_Middle = 1,
	VRFingerSplay_Middle_Ring = 2,
	VRFingerSplay_Ring_Pinky = 3,
	VRFingerSplay_Count = 4,
}
export enum EVRSummaryType {
	VRSummaryType_FromAnimation = 0,
	VRSummaryType_FromDevice = 1,
}
export enum EVRInputFilterCancelType {
	VRInputFilterCancel_Timers = 0,
	VRInputFilterCancel_Momentum = 1,
}
export enum EVRInputStringBits {
	VRInputString_Hand = 1,
	VRInputString_ControllerType = 2,
	VRInputString_InputSource = 4,
	VRInputString_All = -1,
}
export enum EIOBufferError {
	IOBuffer_Success = 0,
	IOBuffer_OperationFailed = 100,
	IOBuffer_InvalidHandle = 101,
	IOBuffer_InvalidArgument = 102,
	IOBuffer_PathExists = 103,
	IOBuffer_PathDoesNotExist = 104,
	IOBuffer_Permission = 105,
}
export enum EIOBufferMode {
	IOBufferMode_Read = 1,
	IOBufferMode_Write = 2,
	IOBufferMode_Create = 512,
}
export enum EVRDebugError {
	VRDebugError_Success = 0,
	VRDebugError_BadParameter = 1,
}
export enum EPropertyWriteType {
	PropertyWrite_Set = 0,
	PropertyWrite_Erase = 1,
	PropertyWrite_SetError = 2,
}
export enum EBlockQueueError {
	BlockQueueError_None = 0,
	BlockQueueError_QueueAlreadyExists = 1,
	BlockQueueError_QueueNotFound = 2,
	BlockQueueError_BlockNotAvailable = 3,
	BlockQueueError_InvalidHandle = 4,
	BlockQueueError_InvalidParam = 5,
	BlockQueueError_ParamMismatch = 6,
	BlockQueueError_InternalError = 7,
	BlockQueueError_AlreadyInitialized = 8,
	BlockQueueError_OperationIsServerOnly = 9,
	BlockQueueError_TooManyConnections = 10,
}
export enum EBlockQueueReadType {
	BlockQueueRead_Latest = 0,
	BlockQueueRead_New = 1,
	BlockQueueRead_Next = 2,
}
export enum EBlockQueueCreationFlag {
	BlockQueueFlag_OwnerIsReader = 1,
}

//structs
export type HmdMatrix34_t = {
	m: [[number, number, number, number], [number, number, number, number], [number, number, number, number]];
}
export type HmdMatrix33_t = {
	m: [[number, number, number], [number, number, number], [number, number, number]];
}
export type HmdMatrix44_t = {
	m: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]];
}
export type HmdVector3_t = {
	v: [number, number, number];
}
export type HmdVector4_t = {
	v: [number, number, number, number];
}
export type HmdVector3d_t = {
	v: [number, number, number];
}
export type HmdVector2_t = {
	v: [number, number];
}
export type HmdQuaternion_t = {
	w: number;
	x: number;
	y: number;
	z: number;
}
export type HmdQuaternionf_t = {
	w: number;
	x: number;
	y: number;
	z: number;
}
export type HmdColor_t = {
	r: number;
	g: number;
	b: number;
	a: number;
}
export type HmdQuad_t = {
	vCorners: [HmdVector3_t, HmdVector3_t, HmdVector3_t, HmdVector3_t];
}
export type HmdRect2_t = {
	vTopLeft: HmdVector2_t;
	vBottomRight: HmdVector2_t;
}
export type VRBoneTransform_t = {
	position: HmdVector4_t;
	orientation: HmdQuaternionf_t;
}
export type DistortionCoordinates_t = {
	rfRed: [number, number];
	rfGreen: [number, number];
	rfBlue: [number, number];
}
export type Texture_t = {
	handle: any;
	eType: ETextureType;
	eColorSpace: EColorSpace;
}
export type TrackedDevicePose_t = {
	mDeviceToAbsoluteTracking: HmdMatrix34_t;
	vVelocity: HmdVector3_t;
	vAngularVelocity: HmdVector3_t;
	eTrackingResult: ETrackingResult;
	bPoseIsValid: any;
	bDeviceIsConnected: any;
}
export type VRTextureBounds_t = {
	uMin: number;
	vMin: number;
	uMax: number;
	vMax: number;
}
export type VRTextureWithPose_t = {
	mDeviceToAbsoluteTracking: HmdMatrix34_t;
}
export type VRTextureDepthInfo_t = {
	handle: any;
	mProjection: HmdMatrix44_t;
	vRange: HmdVector2_t;
}
export type VRTextureWithDepth_t = {
	depth: VRTextureDepthInfo_t;
}
export type VRTextureWithPoseAndDepth_t = {
	depth: VRTextureDepthInfo_t;
}
export type VRVulkanTextureData_t = {
	m_nImage: number;
	m_nQueueFamilyIndex: number;
	m_nWidth: number;
	m_nHeight: number;
	m_nFormat: number;
	m_nSampleCount: number;
}
export type VRVulkanTextureArrayData_t = {
	m_unArrayIndex: number;
	m_unArraySize: number;
}
export type D3D12TextureData_t = {
	m_nNodeMask: number;
}
export type VREvent_Controller_t = {
	button: number;
}
export type VREvent_Mouse_t = {
	x: number;
	y: number;
	button: number;
}
export type VREvent_Scroll_t = {
	xdelta: number;
	ydelta: number;
	unused: number;
	viewportscale: number;
}
export type VREvent_TouchPadMove_t = {
	bFingerDown: any;
	flSecondsFingerDown: number;
	fValueXFirst: number;
	fValueYFirst: number;
	fValueXRaw: number;
	fValueYRaw: number;
}
export type VREvent_Notification_t = {
	ulUserValue: number;
	notificationId: number;
}
export type VREvent_Process_t = {
	pid: number;
	oldPid: number;
	bForced: any;
	bConnectionLost: any;
}
export type VREvent_Overlay_t = {
	overlayHandle: number;
	devicePath: number;
	memoryBlockId: number;
}
export type VREvent_Status_t = {
	statusState: number;
}
export type VREvent_Keyboard_t = {
	cNewInput: [any, any, any, any, any, any, any, any];
	uUserValue: number;
}
export type VREvent_Ipd_t = {
	ipdMeters: number;
}
export type VREvent_Chaperone_t = {
	m_nPreviousUniverse: number;
	m_nCurrentUniverse: number;
}
export type VREvent_Reserved_t = {
	reserved0: number;
	reserved1: number;
	reserved2: number;
	reserved3: number;
	reserved4: number;
	reserved5: number;
}
export type VREvent_PerformanceTest_t = {
	m_nFidelityLevel: number;
}
export type VREvent_SeatedZeroPoseReset_t = {
	bResetBySystemMenu: any;
}
export type VREvent_Screenshot_t = {
	handle: number;
	type: number;
}
export type VREvent_ScreenshotProgress_t = {
	progress: number;
}
export type VREvent_ApplicationLaunch_t = {
	pid: number;
	unArgsHandle: number;
}
export type VREvent_EditingCameraSurface_t = {
	overlayHandle: number;
	nVisualMode: number;
}
export type VREvent_MessageOverlay_t = {
	unVRMessageOverlayResponse: number;
}
export type VREvent_Property_t = {
	container: any;
	prop: ETrackedDeviceProperty;
}
export type VREvent_HapticVibration_t = {
	containerHandle: number;
	componentHandle: number;
	fDurationSeconds: number;
	fFrequency: number;
	fAmplitude: number;
}
export type VREvent_WebConsole_t = {
	webConsoleHandle: any;
}
export type VREvent_InputBindingLoad_t = {
	ulAppContainer: any;
	pathMessage: number;
	pathUrl: number;
	pathControllerType: number;
}
export type VREvent_InputActionManifestLoad_t = {
	pathAppKey: number;
	pathMessage: number;
	pathMessageParam: number;
	pathManifestPath: number;
}
export type VREvent_SpatialAnchor_t = {
	unHandle: any;
}
export type VREvent_ProgressUpdate_t = {
	ulApplicationPropertyContainer: number;
	pathDevice: number;
	pathInputSource: number;
	pathProgressAction: number;
	pathIcon: number;
	fProgress: number;
}
export type VREvent_ShowUI_t = {
	eType: EShowUIType;
}
export type VREvent_ShowDevTools_t = {
	nBrowserIdentifier: number;
}
export type VREvent_HDCPError_t = {
	eCode: EHDCPError;
}
export type VREvent_t = {
	eventType: number;
	trackedDeviceIndex: any;
	eventAgeSeconds: number;
	data: any;
}
export type RenderModel_ComponentState_t = {
	mTrackingToComponentRenderModel: HmdMatrix34_t;
	mTrackingToComponentLocal: HmdMatrix34_t;
	uProperties: any;
}
export type HiddenAreaMesh_t = {
	pVertexData: any;
	unTriangleCount: number;
}
export type VRControllerAxis_t = {
	x: number;
	y: number;
}
export type VRControllerState001_t = {
	unPacketNum: number;
	ulButtonPressed: number;
	ulButtonTouched: number;
	rAxis: [VRControllerAxis_t, VRControllerAxis_t, VRControllerAxis_t, VRControllerAxis_t, VRControllerAxis_t];
}
export type CameraVideoStreamFrameHeader_t = {
	eFrameType: EVRTrackedCameraFrameType;
	nWidth: number;
	nHeight: number;
	nBytesPerPixel: number;
	nFrameSequence: number;
	trackedDevicePose: TrackedDevicePose_t;
	ulFrameExposureTime: number;
}
export type Compositor_FrameTiming = {
	m_nSize: number;
	m_nFrameIndex: number;
	m_nNumFramePresents: number;
	m_nNumMisPresented: number;
	m_nNumDroppedFrames: number;
	m_nReprojectionFlags: number;
	m_flSystemTimeInSeconds: number;
	m_flPreSubmitGpuMs: number;
	m_flPostSubmitGpuMs: number;
	m_flTotalRenderGpuMs: number;
	m_flCompositorRenderGpuMs: number;
	m_flCompositorRenderCpuMs: number;
	m_flCompositorIdleCpuMs: number;
	m_flClientFrameIntervalMs: number;
	m_flPresentCallCpuMs: number;
	m_flWaitForPresentCpuMs: number;
	m_flSubmitFrameMs: number;
	m_flWaitGetPosesCalledMs: number;
	m_flNewPosesReadyMs: number;
	m_flNewFrameReadyMs: number;
	m_flCompositorUpdateStartMs: number;
	m_flCompositorUpdateEndMs: number;
	m_flCompositorRenderStartMs: number;
	m_HmdPose: any;
	m_nNumVSyncsReadyForUse: number;
	m_nNumVSyncsToFirstView: number;
}
export type Compositor_BenchmarkResults = {
	m_flMegaPixelsPerSecond: number;
	m_flHmdRecommendedMegaPixelsPerSecond: number;
}
export type DriverDirectMode_FrameTiming = {
	m_nSize: number;
	m_nNumFramePresents: number;
	m_nNumMisPresented: number;
	m_nNumDroppedFrames: number;
	m_nReprojectionFlags: number;
}
export type ImuSample_t = {
	fSampleTime: number;
	vAccel: HmdVector3d_t;
	vGyro: HmdVector3d_t;
	unOffScaleFlags: number;
}
export type AppOverrideKeys_t = {
	pchKey: any;
	pchValue: any;
}
export type Compositor_CumulativeStats = {
	m_nPid: number;
	m_nNumFramePresents: number;
	m_nNumDroppedFrames: number;
	m_nNumReprojectedFrames: number;
	m_nNumFramePresentsOnStartup: number;
	m_nNumDroppedFramesOnStartup: number;
	m_nNumReprojectedFramesOnStartup: number;
	m_nNumLoading: number;
	m_nNumFramePresentsLoading: number;
	m_nNumDroppedFramesLoading: number;
	m_nNumReprojectedFramesLoading: number;
	m_nNumTimedOut: number;
	m_nNumFramePresentsTimedOut: number;
	m_nNumDroppedFramesTimedOut: number;
	m_nNumReprojectedFramesTimedOut: number;
}
export type Compositor_StageRenderSettings = {
	m_PrimaryColor: HmdColor_t;
	m_SecondaryColor: HmdColor_t;
	m_flVignetteInnerRadius: number;
	m_flVignetteOuterRadius: number;
	m_flFresnelStrength: number;
	m_bBackfaceCulling: any;
	m_bGreyscale: any;
	m_bWireframe: any;
}
export type VROverlayIntersectionParams_t = {
	vSource: HmdVector3_t;
	vDirection: HmdVector3_t;
	eOrigin: ETrackingUniverseOrigin;
}
export type VROverlayIntersectionResults_t = {
	vPoint: HmdVector3_t;
	vNormal: HmdVector3_t;
	vUVs: HmdVector2_t;
	fDistance: number;
}
export type IntersectionMaskRectangle_t = {
	m_flTopLeftX: number;
	m_flTopLeftY: number;
	m_flWidth: number;
	m_flHeight: number;
}
export type IntersectionMaskCircle_t = {
	m_flCenterX: number;
	m_flCenterY: number;
	m_flRadius: number;
}
export type VROverlayIntersectionMaskPrimitive_t = {
	m_nPrimitiveType: EVROverlayIntersectionMaskPrimitiveType;
	m_Primitive: any;
}
export type VROverlayProjection_t = {
	fLeft: number;
	fRight: number;
	fTop: number;
	fBottom: number;
}
export type VROverlayView_t = {
	overlayHandle: any;
	texture: Texture_t;
	textureBounds: VRTextureBounds_t;
}
export type VRVulkanDevice_t = {
	m_uQueueFamilyIndex: number;
}
export type VRNativeDevice_t = {
	handle: any;
	eType: EDeviceType;
}
export type RenderModel_Vertex_t = {
	vPosition: HmdVector3_t;
	vNormal: HmdVector3_t;
	rfTextureCoord: [number, number];
}
export type RenderModel_TextureMap_t = {
	unWidth: number;
	unHeight: number;
	rubTextureMapData: any;
	format: EVRRenderModelTextureFormat;
	unMipLevels: number;
}
export type RenderModel_t = {
	rVertexData: any;
	unVertexCount: number;
	rIndexData: any;
	unTriangleCount: number;
	diffuseTextureId: any;
}
export type RenderModel_ControllerMode_State_t = {
	bScrollWheelVisible: any;
}
export type NotificationBitmap_t = {
	m_pImageData: any;
	m_nWidth: number;
	m_nHeight: number;
	m_nBytesPerPixel: number;
}
export type CVRSettingHelper = {
	m_pSettings: any;
}
export type InputAnalogActionData_t = {
	bActive: any;
	activeOrigin: any;
	x: number;
	y: number;
	z: number;
	deltaX: number;
	deltaY: number;
	deltaZ: number;
	fUpdateTime: number;
}
export type InputDigitalActionData_t = {
	bActive: any;
	activeOrigin: any;
	bState: any;
	bChanged: any;
	fUpdateTime: number;
}
export type InputPoseActionData_t = {
	bActive: any;
	activeOrigin: any;
	pose: TrackedDevicePose_t;
}
export type InputSkeletalActionData_t = {
	bActive: any;
	activeOrigin: any;
}
export type InputOriginInfo_t = {
	devicePath: any;
	trackedDeviceIndex: any;
	rchRenderModelComponentName: [any];
}
export type InputBindingInfo_t = {
	rchDevicePathName: [any];
	rchInputPathName: [any];
	rchModeName: [any];
	rchSlotName: [any];
	rchInputSourceType: [any, any, any];
}
export type VRActiveActionSet_t = {
	ulActionSet: any;
	ulRestrictedToDevice: any;
	ulSecondaryActionSet: any;
	unPadding: number;
	nPriority: number;
}
export type VRSkeletalSummaryData_t = {
	flFingerCurl: [number, number, number, number, number];
	flFingerSplay: [number, number, number, number];
}
export type SpatialAnchorPose_t = {
	mAnchorToAbsoluteTracking: HmdMatrix34_t;
}
export type COpenVRContext = {
	m_pVRSystem: any;
	m_pVRChaperone: any;
	m_pVRChaperoneSetup: any;
	m_pVRCompositor: any;
	m_pVRHeadsetView: any;
	m_pVROverlay: any;
	m_pVROverlayView: any;
	m_pVRResources: any;
	m_pVRRenderModels: any;
	m_pVRExtendedDisplay: any;
	m_pVRSettings: any;
	m_pVRApplications: any;
	m_pVRTrackedCamera: any;
	m_pVRScreenshots: any;
	m_pVRDriverManager: any;
	m_pVRInput: any;
	m_pVRIOBuffer: any;
	m_pVRSpatialAnchors: any;
	m_pVRDebug: any;
	m_pVRNotifications: any;
}
export type PropertyWrite_t = {
	prop: ETrackedDeviceProperty;
	writeType: EPropertyWriteType;
	eSetError: ETrackedPropertyError;
	pvBuffer: any;
	unBufferSize: number;
	unTag: any;
	eError: ETrackedPropertyError;
}
export type PropertyRead_t = {
	prop: ETrackedDeviceProperty;
	pvBuffer: any;
	unBufferSize: number;
	unTag: any;
	unRequiredBufferSize: number;
	eError: ETrackedPropertyError;
}
export type CVRPropertyHelpers = {
	m_pProperties: any;
}
export type PathWrite_t = {
	ulPath: any;
	writeType: EPropertyWriteType;
	eSetError: ETrackedPropertyError;
	pvBuffer: any;
	unBufferSize: number;
	unTag: any;
	eError: ETrackedPropertyError;
	pszPath: any;
}
export type PathRead_t = {
	ulPath: any;
	pvBuffer: any;
	unBufferSize: number;
	unTag: any;
	unRequiredBufferSize: number;
	eError: ETrackedPropertyError;
	pszPath: any;
}

//typedefs
export type PropertyTypeTag_t = number;
export type SpatialAnchorHandle_t = number;
export type glSharedTextureHandle_t = any;
export type glInt_t = number;
export type glUInt_t = number;
export type SharedTextureHandle_t = number;
export type DriverId_t = number;
export type TrackedDeviceIndex_t = number;
export type WebConsoleHandle_t = number;
export type PropertyContainerHandle_t = number;
export type DriverHandle_t = any;
export type VRActionHandle_t = number;
export type VRActionSetHandle_t = number;
export type VRInputValueHandle_t = number;
export type VRComponentProperties = number;
export type VROverlayHandle_t = number;
export type BoneIndex_t = number;
export type TrackedCameraHandle_t = number;
export type ScreenshotHandle_t = number;
export type TextureID_t = number;
export type VRNotificationId = number;
export type IOBufferHandle_t = number;
export type VrProfilerEventHandle_t = number;
export type HmdError = EVRInitError;
export type Hmd_Eye = EVREye;
export type ColorSpace = EColorSpace;
export type HmdTrackingResult = ETrackingResult;
export type TrackedDeviceClass = ETrackedDeviceClass;
export type TrackingUniverseOrigin = ETrackingUniverseOrigin;
export type TrackedDeviceProperty = ETrackedDeviceProperty;
export type TrackedPropertyError = ETrackedPropertyError;
export type VRSubmitFlags_t = EVRSubmitFlags;
export type VRState_t = EVRState;
export type CollisionBoundsStyle_t = ECollisionBoundsStyle;
export type VROverlayError = EVROverlayError;
export type VRFirmwareError = EVRFirmwareError;
export type VRCompositorError = EVRCompositorError;
export type VRScreenshotsError = EVRScreenshotError;
export type PathHandle_t = number;

//constants
export const k_nDriverNone = 4294967295;
export const k_unMaxDriverDebugResponseSize = 32768;
export const k_unTrackedDeviceIndex_Hmd = 0;
export const k_unMaxTrackedDeviceCount = 64;
export const k_unTrackedDeviceIndexOther = 4294967294;
export const k_unTrackedDeviceIndexInvalid = 4294967295;
export const k_ulInvalidPropertyContainer = 0;
export const k_unInvalidPropertyTag = 0;
export const k_ulInvalidDriverHandle = 0;
export const k_unFloatPropertyTag = 1;
export const k_unInt32PropertyTag = 2;
export const k_unUint64PropertyTag = 3;
export const k_unBoolPropertyTag = 4;
export const k_unStringPropertyTag = 5;
export const k_unErrorPropertyTag = 6;
export const k_unDoublePropertyTag = 7;
export const k_unHmdMatrix34PropertyTag = 20;
export const k_unHmdMatrix44PropertyTag = 21;
export const k_unHmdVector3PropertyTag = 22;
export const k_unHmdVector4PropertyTag = 23;
export const k_unHmdVector2PropertyTag = 24;
export const k_unHmdQuadPropertyTag = 25;
export const k_unHiddenAreaPropertyTag = 30;
export const k_unPathHandleInfoTag = 31;
export const k_unActionPropertyTag = 32;
export const k_unInputValuePropertyTag = 33;
export const k_unWildcardPropertyTag = 34;
export const k_unHapticVibrationPropertyTag = 35;
export const k_unSkeletonPropertyTag = 36;
export const k_unSpatialAnchorPosePropertyTag = 40;
export const k_unJsonPropertyTag = 41;
export const k_unActiveActionSetPropertyTag = 42;
export const k_unOpenVRInternalReserved_Start = 1000;
export const k_unOpenVRInternalReserved_End = 10000;
export const k_unMaxPropertyStringSize = 32768;
export const k_ulInvalidActionHandle = 0;
export const k_ulInvalidActionSetHandle = 0;
export const k_ulInvalidInputValueHandle = 0;
export const k_unControllerStateAxisCount = 5;
export const k_ulOverlayHandleInvalid = 0;
export const k_unMaxDistortionFunctionParameters = 8;
export const k_unScreenshotHandleInvalid = 0;
export const IVRSystem_Version = "IVRSystem_022";
export const IVRExtendedDisplay_Version = "IVRExtendedDisplay_001";
export const IVRTrackedCamera_Version = "IVRTrackedCamera_006";
export const k_unMaxApplicationKeyLength = 128;
export const k_pch_MimeType_HomeApp = "vr/home";
export const k_pch_MimeType_GameTheater = "vr/game_theater";
export const IVRApplications_Version = "IVRApplications_007";
export const IVRChaperone_Version = "IVRChaperone_004";
export const IVRChaperoneSetup_Version = "IVRChaperoneSetup_006";
export const IVRCompositor_Version = "IVRCompositor_027";
export const k_unVROverlayMaxKeyLength = 128;
export const k_unVROverlayMaxNameLength = 128;
export const k_unMaxOverlayCount = 128;
export const k_unMaxOverlayIntersectionMaskPrimitivesCount = 32;
export const IVROverlay_Version = "IVROverlay_026";
export const IVROverlayView_Version = "IVROverlayView_003";
export const k_unHeadsetViewMaxWidth = 3840;
export const k_unHeadsetViewMaxHeight = 2160;
export const k_pchHeadsetViewOverlayKey = "system.HeadsetView";
export const IVRHeadsetView_Version = "IVRHeadsetView_001";
export const k_pch_Controller_Component_GDC2015 = "gdc2015";
export const k_pch_Controller_Component_Base = "base";
export const k_pch_Controller_Component_Tip = "tip";
export const k_pch_Controller_Component_HandGrip = "handgrip";
export const k_pch_Controller_Component_Status = "status";
export const IVRRenderModels_Version = "IVRRenderModels_006";
export const k_unNotificationTextMaxSize = 256;
export const IVRNotifications_Version = "IVRNotifications_002";
export const k_unMaxSettingsKeyLength = 128;
export const IVRSettings_Version = "IVRSettings_003";
export const k_pch_SteamVR_Section = "steamvr";
export const k_pch_SteamVR_RequireHmd_String = "requireHmd";
export const k_pch_SteamVR_ForcedDriverKey_String = "forcedDriver";
export const k_pch_SteamVR_ForcedHmdKey_String = "forcedHmd";
export const k_pch_SteamVR_DisplayDebug_Bool = "displayDebug";
export const k_pch_SteamVR_DebugProcessPipe_String = "debugProcessPipe";
export const k_pch_SteamVR_DisplayDebugX_Int32 = "displayDebugX";
export const k_pch_SteamVR_DisplayDebugY_Int32 = "displayDebugY";
export const k_pch_SteamVR_SendSystemButtonToAllApps_Bool = "sendSystemButtonToAllApps";
export const k_pch_SteamVR_LogLevel_Int32 = "loglevel";
export const k_pch_SteamVR_IPD_Float = "ipd";
export const k_pch_SteamVR_Background_String = "background";
export const k_pch_SteamVR_BackgroundUseDomeProjection_Bool = "backgroundUseDomeProjection";
export const k_pch_SteamVR_BackgroundCameraHeight_Float = "backgroundCameraHeight";
export const k_pch_SteamVR_BackgroundDomeRadius_Float = "backgroundDomeRadius";
export const k_pch_SteamVR_GridColor_String = "gridColor";
export const k_pch_SteamVR_PlayAreaColor_String = "playAreaColor";
export const k_pch_SteamVR_TrackingLossColor_String = "trackingLossColor";
export const k_pch_SteamVR_ShowStage_Bool = "showStage";
export const k_pch_SteamVR_DrawTrackingReferences_Bool = "drawTrackingReferences";
export const k_pch_SteamVR_ActivateMultipleDrivers_Bool = "activateMultipleDrivers";
export const k_pch_SteamVR_UsingSpeakers_Bool = "usingSpeakers";
export const k_pch_SteamVR_SpeakersForwardYawOffsetDegrees_Float = "speakersForwardYawOffsetDegrees";
export const k_pch_SteamVR_BaseStationPowerManagement_Int32 = "basestationPowerManagement";
export const k_pch_SteamVR_ShowBaseStationPowerManagementTip_Int32 = "ShowBaseStationPowerManagementTip";
export const k_pch_SteamVR_NeverKillProcesses_Bool = "neverKillProcesses";
export const k_pch_SteamVR_SupersampleScale_Float = "supersampleScale";
export const k_pch_SteamVR_MaxRecommendedResolution_Int32 = "maxRecommendedResolution";
export const k_pch_SteamVR_MotionSmoothing_Bool = "motionSmoothing";
export const k_pch_SteamVR_MotionSmoothingOverride_Int32 = "motionSmoothingOverride";
export const k_pch_SteamVR_FramesToThrottle_Int32 = "framesToThrottle";
export const k_pch_SteamVR_AdditionalFramesToPredict_Int32 = "additionalFramesToPredict";
export const k_pch_SteamVR_WorldScale_Float = "worldScale";
export const k_pch_SteamVR_FovScale_Int32 = "fovScale";
export const k_pch_SteamVR_DisableAsyncReprojection_Bool = "disableAsync";
export const k_pch_SteamVR_ForceFadeOnBadTracking_Bool = "forceFadeOnBadTracking";
export const k_pch_SteamVR_DefaultMirrorView_Int32 = "mirrorView";
export const k_pch_SteamVR_ShowLegacyMirrorView_Bool = "showLegacyMirrorView";
export const k_pch_SteamVR_MirrorViewVisibility_Bool = "showMirrorView";
export const k_pch_SteamVR_MirrorViewDisplayMode_Int32 = "mirrorViewDisplayMode";
export const k_pch_SteamVR_MirrorViewEye_Int32 = "mirrorViewEye";
export const k_pch_SteamVR_MirrorViewGeometry_String = "mirrorViewGeometry";
export const k_pch_SteamVR_MirrorViewGeometryMaximized_String = "mirrorViewGeometryMaximized";
export const k_pch_SteamVR_PerfGraphVisibility_Bool = "showPerfGraph";
export const k_pch_SteamVR_StartMonitorFromAppLaunch = "startMonitorFromAppLaunch";
export const k_pch_SteamVR_StartCompositorFromAppLaunch_Bool = "startCompositorFromAppLaunch";
export const k_pch_SteamVR_StartDashboardFromAppLaunch_Bool = "startDashboardFromAppLaunch";
export const k_pch_SteamVR_StartOverlayAppsFromDashboard_Bool = "startOverlayAppsFromDashboard";
export const k_pch_SteamVR_EnableHomeApp = "enableHomeApp";
export const k_pch_SteamVR_CycleBackgroundImageTimeSec_Int32 = "CycleBackgroundImageTimeSec";
export const k_pch_SteamVR_RetailDemo_Bool = "retailDemo";
export const k_pch_SteamVR_IpdOffset_Float = "ipdOffset";
export const k_pch_SteamVR_AllowSupersampleFiltering_Bool = "allowSupersampleFiltering";
export const k_pch_SteamVR_SupersampleManualOverride_Bool = "supersampleManualOverride";
export const k_pch_SteamVR_EnableLinuxVulkanAsync_Bool = "enableLinuxVulkanAsync";
export const k_pch_SteamVR_AllowDisplayLockedMode_Bool = "allowDisplayLockedMode";
export const k_pch_SteamVR_HaveStartedTutorialForNativeChaperoneDriver_Bool = "haveStartedTutorialForNativeChaperoneDriver";
export const k_pch_SteamVR_ForceWindows32bitVRMonitor = "forceWindows32BitVRMonitor";
export const k_pch_SteamVR_DebugInputBinding = "debugInputBinding";
export const k_pch_SteamVR_DoNotFadeToGrid = "doNotFadeToGrid";
export const k_pch_SteamVR_RenderCameraMode = "renderCameraMode";
export const k_pch_SteamVR_EnableSharedResourceJournaling = "enableSharedResourceJournaling";
export const k_pch_SteamVR_EnableSafeMode = "enableSafeMode";
export const k_pch_SteamVR_PreferredRefreshRate = "preferredRefreshRate";
export const k_pch_SteamVR_LastVersionNotice = "lastVersionNotice";
export const k_pch_SteamVR_LastVersionNoticeDate = "lastVersionNoticeDate";
export const k_pch_SteamVR_HmdDisplayColorGainR_Float = "hmdDisplayColorGainR";
export const k_pch_SteamVR_HmdDisplayColorGainG_Float = "hmdDisplayColorGainG";
export const k_pch_SteamVR_HmdDisplayColorGainB_Float = "hmdDisplayColorGainB";
export const k_pch_SteamVR_CustomIconStyle_String = "customIconStyle";
export const k_pch_SteamVR_CustomOffIconStyle_String = "customOffIconStyle";
export const k_pch_SteamVR_CustomIconForceUpdate_String = "customIconForceUpdate";
export const k_pch_SteamVR_AllowGlobalActionSetPriority = "globalActionSetPriority";
export const k_pch_SteamVR_OverlayRenderQuality = "overlayRenderQuality_2";
export const k_pch_SteamVR_BlockOculusSDKOnOpenVRLaunchOption_Bool = "blockOculusSDKOnOpenVRLaunchOption";
export const k_pch_SteamVR_BlockOculusSDKOnAllLaunches_Bool = "blockOculusSDKOnAllLaunches";
export const k_pch_SteamVR_HDCPLegacyCompatibility_Bool = "hdcp14legacyCompatibility";
export const k_pch_SteamVR_DisplayPortTrainingMode_Int = "displayPortTrainingMode";
export const k_pch_SteamVR_UsePrism_Bool = "usePrism";
export const k_pch_DirectMode_Section = "direct_mode";
export const k_pch_DirectMode_Enable_Bool = "enable";
export const k_pch_DirectMode_Count_Int32 = "count";
export const k_pch_DirectMode_EdidVid_Int32 = "edidVid";
export const k_pch_DirectMode_EdidPid_Int32 = "edidPid";
export const k_pch_Lighthouse_Section = "driver_lighthouse";
export const k_pch_Lighthouse_DisableIMU_Bool = "disableimu";
export const k_pch_Lighthouse_DisableIMUExceptHMD_Bool = "disableimuexcepthmd";
export const k_pch_Lighthouse_UseDisambiguation_String = "usedisambiguation";
export const k_pch_Lighthouse_DisambiguationDebug_Int32 = "disambiguationdebug";
export const k_pch_Lighthouse_PrimaryBasestation_Int32 = "primarybasestation";
export const k_pch_Lighthouse_DBHistory_Bool = "dbhistory";
export const k_pch_Lighthouse_EnableBluetooth_Bool = "enableBluetooth";
export const k_pch_Lighthouse_PowerManagedBaseStations_String = "PowerManagedBaseStations";
export const k_pch_Lighthouse_PowerManagedBaseStations2_String = "PowerManagedBaseStations2";
export const k_pch_Lighthouse_InactivityTimeoutForBaseStations_Int32 = "InactivityTimeoutForBaseStations";
export const k_pch_Lighthouse_EnableImuFallback_Bool = "enableImuFallback";
export const k_pch_Null_Section = "driver_null";
export const k_pch_Null_SerialNumber_String = "serialNumber";
export const k_pch_Null_ModelNumber_String = "modelNumber";
export const k_pch_Null_WindowX_Int32 = "windowX";
export const k_pch_Null_WindowY_Int32 = "windowY";
export const k_pch_Null_WindowWidth_Int32 = "windowWidth";
export const k_pch_Null_WindowHeight_Int32 = "windowHeight";
export const k_pch_Null_RenderWidth_Int32 = "renderWidth";
export const k_pch_Null_RenderHeight_Int32 = "renderHeight";
export const k_pch_Null_SecondsFromVsyncToPhotons_Float = "secondsFromVsyncToPhotons";
export const k_pch_Null_DisplayFrequency_Float = "displayFrequency";
export const k_pch_WindowsMR_Section = "driver_holographic";
export const k_pch_UserInterface_Section = "userinterface";
export const k_pch_UserInterface_StatusAlwaysOnTop_Bool = "StatusAlwaysOnTop";
export const k_pch_UserInterface_MinimizeToTray_Bool = "MinimizeToTray";
export const k_pch_UserInterface_HidePopupsWhenStatusMinimized_Bool = "HidePopupsWhenStatusMinimized";
export const k_pch_UserInterface_Screenshots_Bool = "screenshots";
export const k_pch_UserInterface_ScreenshotType_Int = "screenshotType";
export const k_pch_Notifications_Section = "notifications";
export const k_pch_Notifications_DoNotDisturb_Bool = "DoNotDisturb";
export const k_pch_Keyboard_Section = "keyboard";
export const k_pch_Keyboard_TutorialCompletions = "TutorialCompletions";
export const k_pch_Keyboard_ScaleX = "ScaleX";
export const k_pch_Keyboard_ScaleY = "ScaleY";
export const k_pch_Keyboard_OffsetLeftX = "OffsetLeftX";
export const k_pch_Keyboard_OffsetRightX = "OffsetRightX";
export const k_pch_Keyboard_OffsetY = "OffsetY";
export const k_pch_Keyboard_Smoothing = "Smoothing";
export const k_pch_Perf_Section = "perfcheck";
export const k_pch_Perf_PerfGraphInHMD_Bool = "perfGraphInHMD";
export const k_pch_Perf_AllowTimingStore_Bool = "allowTimingStore";
export const k_pch_Perf_SaveTimingsOnExit_Bool = "saveTimingsOnExit";
export const k_pch_Perf_TestData_Float = "perfTestData";
export const k_pch_Perf_GPUProfiling_Bool = "GPUProfiling";
export const k_pch_CollisionBounds_Section = "collisionBounds";
export const k_pch_CollisionBounds_Style_Int32 = "CollisionBoundsStyle";
export const k_pch_CollisionBounds_GroundPerimeterOn_Bool = "CollisionBoundsGroundPerimeterOn";
export const k_pch_CollisionBounds_CenterMarkerOn_Bool = "CollisionBoundsCenterMarkerOn";
export const k_pch_CollisionBounds_PlaySpaceOn_Bool = "CollisionBoundsPlaySpaceOn";
export const k_pch_CollisionBounds_FadeDistance_Float = "CollisionBoundsFadeDistance";
export const k_pch_CollisionBounds_WallHeight_Float = "CollisionBoundsWallHeight";
export const k_pch_CollisionBounds_ColorGammaR_Int32 = "CollisionBoundsColorGammaR";
export const k_pch_CollisionBounds_ColorGammaG_Int32 = "CollisionBoundsColorGammaG";
export const k_pch_CollisionBounds_ColorGammaB_Int32 = "CollisionBoundsColorGammaB";
export const k_pch_CollisionBounds_ColorGammaA_Int32 = "CollisionBoundsColorGammaA";
export const k_pch_CollisionBounds_EnableDriverImport = "enableDriverBoundsImport";
export const k_pch_Camera_Section = "camera";
export const k_pch_Camera_EnableCamera_Bool = "enableCamera";
export const k_pch_Camera_ShowOnController_Bool = "showOnController";
export const k_pch_Camera_EnableCameraForCollisionBounds_Bool = "enableCameraForCollisionBounds";
export const k_pch_Camera_RoomView_Int32 = "roomView";
export const k_pch_Camera_BoundsColorGammaR_Int32 = "cameraBoundsColorGammaR";
export const k_pch_Camera_BoundsColorGammaG_Int32 = "cameraBoundsColorGammaG";
export const k_pch_Camera_BoundsColorGammaB_Int32 = "cameraBoundsColorGammaB";
export const k_pch_Camera_BoundsColorGammaA_Int32 = "cameraBoundsColorGammaA";
export const k_pch_Camera_BoundsStrength_Int32 = "cameraBoundsStrength";
export const k_pch_Camera_RoomViewStyle_Int32 = "roomViewStyle";
export const k_pch_audio_Section = "audio";
export const k_pch_audio_SetOsDefaultPlaybackDevice_Bool = "setOsDefaultPlaybackDevice";
export const k_pch_audio_EnablePlaybackDeviceOverride_Bool = "enablePlaybackDeviceOverride";
export const k_pch_audio_PlaybackDeviceOverride_String = "playbackDeviceOverride";
export const k_pch_audio_PlaybackDeviceOverrideName_String = "playbackDeviceOverrideName";
export const k_pch_audio_SetOsDefaultRecordingDevice_Bool = "setOsDefaultRecordingDevice";
export const k_pch_audio_EnableRecordingDeviceOverride_Bool = "enableRecordingDeviceOverride";
export const k_pch_audio_RecordingDeviceOverride_String = "recordingDeviceOverride";
export const k_pch_audio_RecordingDeviceOverrideName_String = "recordingDeviceOverrideName";
export const k_pch_audio_EnablePlaybackMirror_Bool = "enablePlaybackMirror";
export const k_pch_audio_PlaybackMirrorDevice_String = "playbackMirrorDevice";
export const k_pch_audio_PlaybackMirrorDeviceName_String = "playbackMirrorDeviceName";
export const k_pch_audio_OldPlaybackMirrorDevice_String = "onPlaybackMirrorDevice";
export const k_pch_audio_ActiveMirrorDevice_String = "activePlaybackMirrorDevice";
export const k_pch_audio_EnablePlaybackMirrorIndependentVolume_Bool = "enablePlaybackMirrorIndependentVolume";
export const k_pch_audio_LastHmdPlaybackDeviceId_String = "lastHmdPlaybackDeviceId";
export const k_pch_audio_VIVEHDMIGain = "viveHDMIGain";
export const k_pch_audio_DualSpeakerAndJackOutput_Bool = "dualSpeakerAndJackOutput";
export const k_pch_audio_MuteMicMonitor_Bool = "muteMicMonitor";
export const k_pch_Power_Section = "power";
export const k_pch_Power_PowerOffOnExit_Bool = "powerOffOnExit";
export const k_pch_Power_TurnOffScreensTimeout_Float = "turnOffScreensTimeout";
export const k_pch_Power_TurnOffControllersTimeout_Float = "turnOffControllersTimeout";
export const k_pch_Power_ReturnToWatchdogTimeout_Float = "returnToWatchdogTimeout";
export const k_pch_Power_AutoLaunchSteamVROnButtonPress = "autoLaunchSteamVROnButtonPress";
export const k_pch_Power_PauseCompositorOnStandby_Bool = "pauseCompositorOnStandby";
export const k_pch_Dashboard_Section = "dashboard";
export const k_pch_Dashboard_EnableDashboard_Bool = "enableDashboard";
export const k_pch_Dashboard_ArcadeMode_Bool = "arcadeMode";
export const k_pch_Dashboard_Position = "position";
export const k_pch_Dashboard_DesktopScale = "desktopScale";
export const k_pch_Dashboard_DashboardScale = "dashboardScale";
export const k_pch_Dashboard_UseStandaloneSystemLayer = "standaloneSystemLayer";
export const k_pch_Dashboard_StickyDashboard = "stickyDashboard";
export const k_pch_modelskin_Section = "modelskins";
export const k_pch_Driver_Enable_Bool = "enable";
export const k_pch_Driver_BlockedBySafemode_Bool = "blocked_by_safe_mode";
export const k_pch_Driver_LoadPriority_Int32 = "loadPriority";
export const k_pch_WebInterface_Section = "WebInterface";
export const k_pch_VRWebHelper_Section = "VRWebHelper";
export const k_pch_VRWebHelper_DebuggerEnabled_Bool = "DebuggerEnabled";
export const k_pch_VRWebHelper_DebuggerPort_Int32 = "DebuggerPort";
export const k_pch_TrackingOverride_Section = "TrackingOverrides";
export const k_pch_App_BindingAutosaveURLSuffix_String = "AutosaveURL";
export const k_pch_App_BindingLegacyAPISuffix_String = "_legacy";
export const k_pch_App_BindingSteamVRInputAPISuffix_String = "_steamvrinput";
export const k_pch_App_BindingCurrentURLSuffix_String = "CurrentURL";
export const k_pch_App_BindingPreviousURLSuffix_String = "PreviousURL";
export const k_pch_App_NeedToUpdateAutosaveSuffix_Bool = "NeedToUpdateAutosave";
export const k_pch_App_DominantHand_Int32 = "DominantHand";
export const k_pch_App_BlockOculusSDK_Bool = "blockOculusSDK";
export const k_pch_Trackers_Section = "trackers";
export const k_pch_DesktopUI_Section = "DesktopUI";
export const k_pch_LastKnown_Section = "LastKnown";
export const k_pch_LastKnown_HMDManufacturer_String = "HMDManufacturer";
export const k_pch_LastKnown_HMDModel_String = "HMDModel";
export const k_pch_DismissedWarnings_Section = "DismissedWarnings";
export const k_pch_Input_Section = "input";
export const k_pch_Input_LeftThumbstickRotation_Float = "leftThumbstickRotation";
export const k_pch_Input_RightThumbstickRotation_Float = "rightThumbstickRotation";
export const k_pch_Input_ThumbstickDeadzone_Float = "thumbstickDeadzone";
export const k_pch_GpuSpeed_Section = "GpuSpeed";
export const IVRScreenshots_Version = "IVRScreenshots_001";
export const IVRResources_Version = "IVRResources_001";
export const IVRDriverManager_Version = "IVRDriverManager_001";
export const k_unMaxActionNameLength = 64;
export const k_unMaxActionSetNameLength = 64;
export const k_unMaxActionOriginCount = 16;
export const k_unMaxBoneNameLength = 32;
export const k_nActionSetOverlayGlobalPriorityMin = 16777216;
export const k_nActionSetOverlayGlobalPriorityMax = 33554431;
export const k_nActionSetPriorityReservedMin = 33554432;
export const IVRInput_Version = "IVRInput_010";
export const k_ulInvalidIOBufferHandle = 0;
export const IVRIOBuffer_Version = "IVRIOBuffer_002";
export const k_ulInvalidSpatialAnchorHandle = 0;
export const IVRSpatialAnchors_Version = "IVRSpatialAnchors_001";
export const IVRDebug_Version = "IVRDebug_001";
export const k_ulDisplayRedirectContainer = 25769803779;
export const IVRProperties_Version = "IVRProperties_001";
export const k_pchPathUserHandRight = "/user/hand/right";
export const k_pchPathUserHandLeft = "/user/hand/left";
export const k_pchPathUserHandPrimary = "/user/hand/primary";
export const k_pchPathUserHandSecondary = "/user/hand/secondary";
export const k_pchPathUserHead = "/user/head";
export const k_pchPathUserGamepad = "/user/gamepad";
export const k_pchPathUserTreadmill = "/user/treadmill";
export const k_pchPathUserStylus = "/user/stylus";
export const k_pchPathDevices = "/devices";
export const k_pchPathDevicePath = "/device_path";
export const k_pchPathBestAliasPath = "/best_alias_path";
export const k_pchPathBoundTrackerAliasPath = "/bound_tracker_path";
export const k_pchPathBoundTrackerRole = "/bound_tracker_role";
export const k_pchPathPoseRaw = "/pose/raw";
export const k_pchPathPoseTip = "/pose/tip";
export const k_pchPathPoseGrip = "/pose/grip";
export const k_pchPathSystemButtonClick = "/input/system/click";
export const k_pchPathProximity = "/proximity";
export const k_pchPathControllerTypePrefix = "/controller_type/";
export const k_pchPathInputProfileSuffix = "/input_profile";
export const k_pchPathBindingNameSuffix = "/binding_name";
export const k_pchPathBindingUrlSuffix = "/binding_url";
export const k_pchPathBindingErrorSuffix = "/binding_error";
export const k_pchPathActiveActionSets = "/active_action_sets";
export const k_pchPathComponentUpdates = "/total_component_updates";
export const k_pchPathUserFootLeft = "/user/foot/left";
export const k_pchPathUserFootRight = "/user/foot/right";
export const k_pchPathUserShoulderLeft = "/user/shoulder/left";
export const k_pchPathUserShoulderRight = "/user/shoulder/right";
export const k_pchPathUserElbowLeft = "/user/elbow/left";
export const k_pchPathUserElbowRight = "/user/elbow/right";
export const k_pchPathUserKneeLeft = "/user/knee/left";
export const k_pchPathUserKneeRight = "/user/knee/right";
export const k_pchPathUserWaist = "/user/waist";
export const k_pchPathUserChest = "/user/chest";
export const k_pchPathUserCamera = "/user/camera";
export const k_pchPathUserKeyboard = "/user/keyboard";
export const k_pchPathClientAppKey = "/client_info/app_key";
export const k_ulInvalidPathHandle = 0;
export const IVRPaths_Version = "IVRPaths_001";
export const IVRBlockQueue_Version = "IVRBlockQueue_005";
