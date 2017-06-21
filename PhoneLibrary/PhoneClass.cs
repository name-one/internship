using System;

public class Call
{
    string callerNumber;
    string receiverNummber;
    enum CallState
    {
        inited = 0,
        dialing,
        conversation,
        rejected,
        cancelled,
        finished,
        callStateNum
    };
    CallState state;

    private CallState State { get => state; set => state = value; }

    public Call(string callerNumber = "", string receiverNumber = "")
    {
        this.callerNumber = callerNumber;
        this.receiverNummber = receiverNumber;
        State = CallState.inited;
    }
}

public class Icallable
{


    public virtual bool SendCall(Call call)
    {

        return false;
    }

    public bool RecieveCall(Call call)
    {

        return false;
    }
}

public class Phone : Icallable
{
	public Phone()
	{

    }

    string brand;
    string model;
    bool isVoipSupported;

    public string Brand { get => brand; set => brand = value; }
    public string Model { get => model; set => model = value; }
    public bool IsVoipSupported { get => isVoipSupported; set => isVoipSupported = value; }
}

public class MobilePhone : Phone
{
    public MobilePhone()
    {

    }


    bool RejectCall(Call call)
    {

        return false;
    }

    uint maxWaitingTime;
    uint maxCallTime;

    public uint MaxCallTime { get => maxCallTime; set => maxCallTime = value; }
    public uint MaxWaitingTime { get => maxWaitingTime; set => maxWaitingTime = value; }
}

public class CellPhone : MobilePhone
{
    public CellPhone(uint maxSimCardCount = 1)
    {
        this.maxSimCardCount = maxSimCardCount;
        IMEI = new string[maxSimCardCount];
    }

    bool SendCall(Call call, uint simCardNumber = 0)
    {

        return false;
    }

    readonly uint maxSimCardCount;
    uint simCardCount;
    string[] IMEI;

    bool isSmart;

    public uint SimCardCount { get => simCardCount; set => simCardCount = value; }
    public bool IsSmart { get => isSmart; set => isSmart = value; }
}

public class SatellitePhone : MobilePhone
{
    public SatellitePhone()
    {

    }
    readonly uint maxSatelliteCount = 12;
    uint satelliteCount;

    public uint SatelliteCount { get => satelliteCount; set => satelliteCount = value; }

    public uint MaxSatelliteCount => maxSatelliteCount;
}

public class StationaryPhone : Phone
{
    public StationaryPhone()
    {

    }

    enum DialingMode
    {
        pulseMode = 0,
        toneMode,
        dialingModeNum
    };

    DialingMode mode;

    private DialingMode Mode { get => mode; set => mode = value; }
}


