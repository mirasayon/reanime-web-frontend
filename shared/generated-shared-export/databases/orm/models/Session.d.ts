import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SessionModel = runtime.Types.Result.DefaultSelection<Prisma.$SessionPayload>;
export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
};
export type SessionMinAggregateOutputType = {
    id: string | null;
    token: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    expires_at: Date | null;
    ip_address: string | null;
    user_agent: string | null;
    by_account_id: string | null;
};
export type SessionMaxAggregateOutputType = {
    id: string | null;
    token: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    expires_at: Date | null;
    ip_address: string | null;
    user_agent: string | null;
    by_account_id: string | null;
};
export type SessionCountAggregateOutputType = {
    id: number;
    token: number;
    created_at: number;
    updated_at: number;
    expires_at: number;
    ip_address: number;
    user_agent: number;
    by_account_id: number;
    _all: number;
};
export type SessionMinAggregateInputType = {
    id?: true;
    token?: true;
    created_at?: true;
    updated_at?: true;
    expires_at?: true;
    ip_address?: true;
    user_agent?: true;
    by_account_id?: true;
};
export type SessionMaxAggregateInputType = {
    id?: true;
    token?: true;
    created_at?: true;
    updated_at?: true;
    expires_at?: true;
    ip_address?: true;
    user_agent?: true;
    by_account_id?: true;
};
export type SessionCountAggregateInputType = {
    id?: true;
    token?: true;
    created_at?: true;
    updated_at?: true;
    expires_at?: true;
    ip_address?: true;
    user_agent?: true;
    by_account_id?: true;
    _all?: true;
};
export type SessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SessionCountAggregateInputType;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
};
export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
    [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSession[P]> : Prisma.GetScalarType<T[P], AggregateSession[P]>;
};
export type SessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithAggregationInput | Prisma.SessionOrderByWithAggregationInput[];
    by: Prisma.SessionScalarFieldEnum[] | Prisma.SessionScalarFieldEnum;
    having?: Prisma.SessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessionCountAggregateInputType | true;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
};
export type SessionGroupByOutputType = {
    id: string;
    token: string;
    created_at: Date;
    updated_at: Date;
    expires_at: Date | null;
    ip_address: string | null;
    user_agent: string | null;
    by_account_id: string;
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
};
type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SessionGroupByOutputType[P]>;
}>>;
export type SessionWhereInput = {
    AND?: Prisma.SessionWhereInput | Prisma.SessionWhereInput[];
    OR?: Prisma.SessionWhereInput[];
    NOT?: Prisma.SessionWhereInput | Prisma.SessionWhereInput[];
    id?: Prisma.StringFilter<"Session"> | string;
    token?: Prisma.StringFilter<"Session"> | string;
    created_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    expires_at?: Prisma.DateTimeNullableFilter<"Session"> | Date | string | null;
    ip_address?: Prisma.StringNullableFilter<"Session"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"Session"> | string | null;
    by_account_id?: Prisma.StringFilter<"Session"> | string;
    by_account?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
};
export type SessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    by_account_id?: Prisma.SortOrder;
    by_account?: Prisma.AccountOrderByWithRelationInput;
};
export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.SessionWhereInput | Prisma.SessionWhereInput[];
    OR?: Prisma.SessionWhereInput[];
    NOT?: Prisma.SessionWhereInput | Prisma.SessionWhereInput[];
    created_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    expires_at?: Prisma.DateTimeNullableFilter<"Session"> | Date | string | null;
    ip_address?: Prisma.StringNullableFilter<"Session"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"Session"> | string | null;
    by_account_id?: Prisma.StringFilter<"Session"> | string;
    by_account?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
}, "id" | "token">;
export type SessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    by_account_id?: Prisma.SortOrder;
    _count?: Prisma.SessionCountOrderByAggregateInput;
    _max?: Prisma.SessionMaxOrderByAggregateInput;
    _min?: Prisma.SessionMinOrderByAggregateInput;
};
export type SessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SessionScalarWhereWithAggregatesInput | Prisma.SessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SessionScalarWhereWithAggregatesInput | Prisma.SessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Session"> | string;
    token?: Prisma.StringWithAggregatesFilter<"Session"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Session"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Session"> | Date | string;
    expires_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null;
    ip_address?: Prisma.StringNullableWithAggregatesFilter<"Session"> | string | null;
    user_agent?: Prisma.StringNullableWithAggregatesFilter<"Session"> | string | null;
    by_account_id?: Prisma.StringWithAggregatesFilter<"Session"> | string;
};
export type SessionCreateInput = {
    id?: string;
    token: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expires_at?: Date | string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    by_account: Prisma.AccountCreateNestedOneWithoutSessionsInput;
};
export type SessionUncheckedCreateInput = {
    id?: string;
    token: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expires_at?: Date | string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    by_account_id: string;
};
export type SessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account?: Prisma.AccountUpdateOneRequiredWithoutSessionsNestedInput;
};
export type SessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SessionCreateManyInput = {
    id?: string;
    token: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expires_at?: Date | string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    by_account_id: string;
};
export type SessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SessionListRelationFilter = {
    every?: Prisma.SessionWhereInput;
    some?: Prisma.SessionWhereInput;
    none?: Prisma.SessionWhereInput;
};
export type SessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    by_account_id?: Prisma.SortOrder;
};
export type SessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    by_account_id?: Prisma.SortOrder;
};
export type SessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    by_account_id?: Prisma.SortOrder;
};
export type SessionCreateNestedManyWithoutBy_accountInput = {
    create?: Prisma.XOR<Prisma.SessionCreateWithoutBy_accountInput, Prisma.SessionUncheckedCreateWithoutBy_accountInput> | Prisma.SessionCreateWithoutBy_accountInput[] | Prisma.SessionUncheckedCreateWithoutBy_accountInput[];
    connectOrCreate?: Prisma.SessionCreateOrConnectWithoutBy_accountInput | Prisma.SessionCreateOrConnectWithoutBy_accountInput[];
    createMany?: Prisma.SessionCreateManyBy_accountInputEnvelope;
    connect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
};
export type SessionUncheckedCreateNestedManyWithoutBy_accountInput = {
    create?: Prisma.XOR<Prisma.SessionCreateWithoutBy_accountInput, Prisma.SessionUncheckedCreateWithoutBy_accountInput> | Prisma.SessionCreateWithoutBy_accountInput[] | Prisma.SessionUncheckedCreateWithoutBy_accountInput[];
    connectOrCreate?: Prisma.SessionCreateOrConnectWithoutBy_accountInput | Prisma.SessionCreateOrConnectWithoutBy_accountInput[];
    createMany?: Prisma.SessionCreateManyBy_accountInputEnvelope;
    connect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
};
export type SessionUpdateManyWithoutBy_accountNestedInput = {
    create?: Prisma.XOR<Prisma.SessionCreateWithoutBy_accountInput, Prisma.SessionUncheckedCreateWithoutBy_accountInput> | Prisma.SessionCreateWithoutBy_accountInput[] | Prisma.SessionUncheckedCreateWithoutBy_accountInput[];
    connectOrCreate?: Prisma.SessionCreateOrConnectWithoutBy_accountInput | Prisma.SessionCreateOrConnectWithoutBy_accountInput[];
    upsert?: Prisma.SessionUpsertWithWhereUniqueWithoutBy_accountInput | Prisma.SessionUpsertWithWhereUniqueWithoutBy_accountInput[];
    createMany?: Prisma.SessionCreateManyBy_accountInputEnvelope;
    set?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    disconnect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    delete?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    connect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    update?: Prisma.SessionUpdateWithWhereUniqueWithoutBy_accountInput | Prisma.SessionUpdateWithWhereUniqueWithoutBy_accountInput[];
    updateMany?: Prisma.SessionUpdateManyWithWhereWithoutBy_accountInput | Prisma.SessionUpdateManyWithWhereWithoutBy_accountInput[];
    deleteMany?: Prisma.SessionScalarWhereInput | Prisma.SessionScalarWhereInput[];
};
export type SessionUncheckedUpdateManyWithoutBy_accountNestedInput = {
    create?: Prisma.XOR<Prisma.SessionCreateWithoutBy_accountInput, Prisma.SessionUncheckedCreateWithoutBy_accountInput> | Prisma.SessionCreateWithoutBy_accountInput[] | Prisma.SessionUncheckedCreateWithoutBy_accountInput[];
    connectOrCreate?: Prisma.SessionCreateOrConnectWithoutBy_accountInput | Prisma.SessionCreateOrConnectWithoutBy_accountInput[];
    upsert?: Prisma.SessionUpsertWithWhereUniqueWithoutBy_accountInput | Prisma.SessionUpsertWithWhereUniqueWithoutBy_accountInput[];
    createMany?: Prisma.SessionCreateManyBy_accountInputEnvelope;
    set?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    disconnect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    delete?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    connect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    update?: Prisma.SessionUpdateWithWhereUniqueWithoutBy_accountInput | Prisma.SessionUpdateWithWhereUniqueWithoutBy_accountInput[];
    updateMany?: Prisma.SessionUpdateManyWithWhereWithoutBy_accountInput | Prisma.SessionUpdateManyWithWhereWithoutBy_accountInput[];
    deleteMany?: Prisma.SessionScalarWhereInput | Prisma.SessionScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type SessionCreateWithoutBy_accountInput = {
    id?: string;
    token: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expires_at?: Date | string | null;
    ip_address?: string | null;
    user_agent?: string | null;
};
export type SessionUncheckedCreateWithoutBy_accountInput = {
    id?: string;
    token: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expires_at?: Date | string | null;
    ip_address?: string | null;
    user_agent?: string | null;
};
export type SessionCreateOrConnectWithoutBy_accountInput = {
    where: Prisma.SessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionCreateWithoutBy_accountInput, Prisma.SessionUncheckedCreateWithoutBy_accountInput>;
};
export type SessionCreateManyBy_accountInputEnvelope = {
    data: Prisma.SessionCreateManyBy_accountInput | Prisma.SessionCreateManyBy_accountInput[];
    skipDuplicates?: boolean;
};
export type SessionUpsertWithWhereUniqueWithoutBy_accountInput = {
    where: Prisma.SessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SessionUpdateWithoutBy_accountInput, Prisma.SessionUncheckedUpdateWithoutBy_accountInput>;
    create: Prisma.XOR<Prisma.SessionCreateWithoutBy_accountInput, Prisma.SessionUncheckedCreateWithoutBy_accountInput>;
};
export type SessionUpdateWithWhereUniqueWithoutBy_accountInput = {
    where: Prisma.SessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SessionUpdateWithoutBy_accountInput, Prisma.SessionUncheckedUpdateWithoutBy_accountInput>;
};
export type SessionUpdateManyWithWhereWithoutBy_accountInput = {
    where: Prisma.SessionScalarWhereInput;
    data: Prisma.XOR<Prisma.SessionUpdateManyMutationInput, Prisma.SessionUncheckedUpdateManyWithoutBy_accountInput>;
};
export type SessionScalarWhereInput = {
    AND?: Prisma.SessionScalarWhereInput | Prisma.SessionScalarWhereInput[];
    OR?: Prisma.SessionScalarWhereInput[];
    NOT?: Prisma.SessionScalarWhereInput | Prisma.SessionScalarWhereInput[];
    id?: Prisma.StringFilter<"Session"> | string;
    token?: Prisma.StringFilter<"Session"> | string;
    created_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    expires_at?: Prisma.DateTimeNullableFilter<"Session"> | Date | string | null;
    ip_address?: Prisma.StringNullableFilter<"Session"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"Session"> | string | null;
    by_account_id?: Prisma.StringFilter<"Session"> | string;
};
export type SessionCreateManyBy_accountInput = {
    id?: string;
    token: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expires_at?: Date | string | null;
    ip_address?: string | null;
    user_agent?: string | null;
};
export type SessionUpdateWithoutBy_accountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SessionUncheckedUpdateWithoutBy_accountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SessionUncheckedUpdateManyWithoutBy_accountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    expires_at?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    by_account_id?: boolean;
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["session"]>;
export type SessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    expires_at?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    by_account_id?: boolean;
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["session"]>;
export type SessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    expires_at?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    by_account_id?: boolean;
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["session"]>;
export type SessionSelectScalar = {
    id?: boolean;
    token?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    expires_at?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    by_account_id?: boolean;
};
export type SessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "token" | "created_at" | "updated_at" | "expires_at" | "ip_address" | "user_agent" | "by_account_id", ExtArgs["result"]["session"]>;
export type SessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
};
export type SessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
};
export type SessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
};
export type $SessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Session";
    objects: {
        by_account: Prisma.$AccountPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        token: string;
        created_at: Date;
        updated_at: Date;
        expires_at: Date | null;
        ip_address: string | null;
        user_agent: string | null;
        by_account_id: string;
    }, ExtArgs["result"]["session"]>;
    composites: {};
};
export type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SessionPayload, S>;
export type SessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SessionCountAggregateInputType | true;
};
export interface SessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Session'];
        meta: {
            name: 'Session';
        };
    };
    findUnique<T extends SessionFindUniqueArgs>(args: Prisma.SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SessionFindFirstArgs>(args?: Prisma.SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SessionFindManyArgs>(args?: Prisma.SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SessionCreateArgs>(args: Prisma.SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SessionCreateManyArgs>(args?: Prisma.SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SessionDeleteArgs>(args: Prisma.SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SessionUpdateArgs>(args: Prisma.SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SessionUpdateManyArgs>(args: Prisma.SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SessionUpsertArgs>(args: Prisma.SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SessionCountArgs>(args?: Prisma.Subset<T, SessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SessionCountAggregateOutputType> : number>;
    aggregate<T extends SessionAggregateArgs>(args: Prisma.Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>;
    groupBy<T extends SessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SessionGroupByArgs['orderBy'];
    } : {
        orderBy?: SessionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SessionFieldRefs;
}
export interface Prisma__SessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    by_account<T extends Prisma.AccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccountDefaultArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SessionFieldRefs {
    readonly id: Prisma.FieldRef<"Session", 'String'>;
    readonly token: Prisma.FieldRef<"Session", 'String'>;
    readonly created_at: Prisma.FieldRef<"Session", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Session", 'DateTime'>;
    readonly expires_at: Prisma.FieldRef<"Session", 'DateTime'>;
    readonly ip_address: Prisma.FieldRef<"Session", 'String'>;
    readonly user_agent: Prisma.FieldRef<"Session", 'String'>;
    readonly by_account_id: Prisma.FieldRef<"Session", 'String'>;
}
export type SessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where: Prisma.SessionWhereUniqueInput;
};
export type SessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where: Prisma.SessionWhereUniqueInput;
};
export type SessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type SessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type SessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type SessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionCreateInput, Prisma.SessionUncheckedCreateInput>;
};
export type SessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SessionCreateManyInput | Prisma.SessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    data: Prisma.SessionCreateManyInput | Prisma.SessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionUpdateInput, Prisma.SessionUncheckedUpdateInput>;
    where: Prisma.SessionWhereUniqueInput;
};
export type SessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SessionUpdateManyMutationInput, Prisma.SessionUncheckedUpdateManyInput>;
    where?: Prisma.SessionWhereInput;
    limit?: number;
};
export type SessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionUpdateManyMutationInput, Prisma.SessionUncheckedUpdateManyInput>;
    where?: Prisma.SessionWhereInput;
    limit?: number;
    include?: Prisma.SessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where: Prisma.SessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionCreateInput, Prisma.SessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SessionUpdateInput, Prisma.SessionUncheckedUpdateInput>;
};
export type SessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where: Prisma.SessionWhereUniqueInput;
};
export type SessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
    limit?: number;
};
export type SessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Session.d.ts.map