import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AccountModel = runtime.Types.Result.DefaultSelection<Prisma.$AccountPayload>;
export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
};
export type AccountMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    type: $Enums.AccountType | null;
    email: string | null;
    username: string | null;
    password_hash: string | null;
    is_activated: boolean | null;
    activation_link: string | null;
};
export type AccountMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    type: $Enums.AccountType | null;
    email: string | null;
    username: string | null;
    password_hash: string | null;
    is_activated: boolean | null;
    activation_link: string | null;
};
export type AccountCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    type: number;
    email: number;
    username: number;
    password_hash: number;
    is_activated: number;
    activation_link: number;
    _all: number;
};
export type AccountMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    type?: true;
    email?: true;
    username?: true;
    password_hash?: true;
    is_activated?: true;
    activation_link?: true;
};
export type AccountMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    type?: true;
    email?: true;
    username?: true;
    password_hash?: true;
    is_activated?: true;
    activation_link?: true;
};
export type AccountCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    type?: true;
    email?: true;
    username?: true;
    password_hash?: true;
    is_activated?: true;
    activation_link?: true;
    _all?: true;
};
export type AccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AccountCountAggregateInputType;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
};
export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
    [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAccount[P]> : Prisma.GetScalarType<T[P], AggregateAccount[P]>;
};
export type AccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithAggregationInput | Prisma.AccountOrderByWithAggregationInput[];
    by: Prisma.AccountScalarFieldEnum[] | Prisma.AccountScalarFieldEnum;
    having?: Prisma.AccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountCountAggregateInputType | true;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
};
export type AccountGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    type: $Enums.AccountType;
    email: string | null;
    username: string;
    password_hash: string;
    is_activated: boolean;
    activation_link: string | null;
    _count: AccountCountAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
};
type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AccountGroupByOutputType[P]>;
}>>;
export type AccountWhereInput = {
    AND?: Prisma.AccountWhereInput | Prisma.AccountWhereInput[];
    OR?: Prisma.AccountWhereInput[];
    NOT?: Prisma.AccountWhereInput | Prisma.AccountWhereInput[];
    id?: Prisma.StringFilter<"Account"> | string;
    created_at?: Prisma.DateTimeFilter<"Account"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Account"> | Date | string;
    type?: Prisma.EnumAccountTypeFilter<"Account"> | $Enums.AccountType;
    email?: Prisma.StringNullableFilter<"Account"> | string | null;
    username?: Prisma.StringFilter<"Account"> | string;
    password_hash?: Prisma.StringFilter<"Account"> | string;
    is_activated?: Prisma.BoolFilter<"Account"> | boolean;
    activation_link?: Prisma.StringNullableFilter<"Account"> | string | null;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    sessions?: Prisma.SessionListRelationFilter;
};
export type AccountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    is_activated?: Prisma.SortOrder;
    activation_link?: Prisma.SortOrderInput | Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
};
export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    username?: string;
    AND?: Prisma.AccountWhereInput | Prisma.AccountWhereInput[];
    OR?: Prisma.AccountWhereInput[];
    NOT?: Prisma.AccountWhereInput | Prisma.AccountWhereInput[];
    created_at?: Prisma.DateTimeFilter<"Account"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Account"> | Date | string;
    type?: Prisma.EnumAccountTypeFilter<"Account"> | $Enums.AccountType;
    password_hash?: Prisma.StringFilter<"Account"> | string;
    is_activated?: Prisma.BoolFilter<"Account"> | boolean;
    activation_link?: Prisma.StringNullableFilter<"Account"> | string | null;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    sessions?: Prisma.SessionListRelationFilter;
}, "id" | "email" | "username">;
export type AccountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    is_activated?: Prisma.SortOrder;
    activation_link?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AccountCountOrderByAggregateInput;
    _max?: Prisma.AccountMaxOrderByAggregateInput;
    _min?: Prisma.AccountMinOrderByAggregateInput;
};
export type AccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.AccountScalarWhereWithAggregatesInput | Prisma.AccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.AccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AccountScalarWhereWithAggregatesInput | Prisma.AccountScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Account"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Account"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Account"> | Date | string;
    type?: Prisma.EnumAccountTypeWithAggregatesFilter<"Account"> | $Enums.AccountType;
    email?: Prisma.StringNullableWithAggregatesFilter<"Account"> | string | null;
    username?: Prisma.StringWithAggregatesFilter<"Account"> | string;
    password_hash?: Prisma.StringWithAggregatesFilter<"Account"> | string;
    is_activated?: Prisma.BoolWithAggregatesFilter<"Account"> | boolean;
    activation_link?: Prisma.StringNullableWithAggregatesFilter<"Account"> | string | null;
};
export type AccountCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    type?: $Enums.AccountType;
    email?: string | null;
    username: string;
    password_hash: string;
    is_activated?: boolean;
    activation_link?: string | null;
    profile?: Prisma.ProfileCreateNestedOneWithoutBy_accountInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutBy_accountInput;
};
export type AccountUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    type?: $Enums.AccountType;
    email?: string | null;
    username: string;
    password_hash: string;
    is_activated?: boolean;
    activation_link?: string | null;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutBy_accountInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutBy_accountInput;
};
export type AccountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    is_activated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    activation_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile?: Prisma.ProfileUpdateOneWithoutBy_accountNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutBy_accountNestedInput;
};
export type AccountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    is_activated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    activation_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutBy_accountNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutBy_accountNestedInput;
};
export type AccountCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    type?: $Enums.AccountType;
    email?: string | null;
    username: string;
    password_hash: string;
    is_activated?: boolean;
    activation_link?: string | null;
};
export type AccountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    is_activated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    activation_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AccountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    is_activated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    activation_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AccountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    is_activated?: Prisma.SortOrder;
    activation_link?: Prisma.SortOrder;
};
export type AccountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    is_activated?: Prisma.SortOrder;
    activation_link?: Prisma.SortOrder;
};
export type AccountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    is_activated?: Prisma.SortOrder;
    activation_link?: Prisma.SortOrder;
};
export type AccountScalarRelationFilter = {
    is?: Prisma.AccountWhereInput;
    isNot?: Prisma.AccountWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type AccountCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutSessionsInput, Prisma.AccountUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.AccountWhereUniqueInput;
};
export type AccountUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutSessionsInput, Prisma.AccountUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.AccountUpsertWithoutSessionsInput;
    connect?: Prisma.AccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AccountUpdateToOneWithWhereWithoutSessionsInput, Prisma.AccountUpdateWithoutSessionsInput>, Prisma.AccountUncheckedUpdateWithoutSessionsInput>;
};
export type AccountCreateNestedOneWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutProfileInput, Prisma.AccountUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutProfileInput;
    connect?: Prisma.AccountWhereUniqueInput;
};
export type AccountUpdateOneRequiredWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutProfileInput, Prisma.AccountUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutProfileInput;
    upsert?: Prisma.AccountUpsertWithoutProfileInput;
    connect?: Prisma.AccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AccountUpdateToOneWithWhereWithoutProfileInput, Prisma.AccountUpdateWithoutProfileInput>, Prisma.AccountUncheckedUpdateWithoutProfileInput>;
};
export type AccountCreateWithoutSessionsInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    type?: $Enums.AccountType;
    email?: string | null;
    username: string;
    password_hash: string;
    is_activated?: boolean;
    activation_link?: string | null;
    profile?: Prisma.ProfileCreateNestedOneWithoutBy_accountInput;
};
export type AccountUncheckedCreateWithoutSessionsInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    type?: $Enums.AccountType;
    email?: string | null;
    username: string;
    password_hash: string;
    is_activated?: boolean;
    activation_link?: string | null;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutBy_accountInput;
};
export type AccountCreateOrConnectWithoutSessionsInput = {
    where: Prisma.AccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountCreateWithoutSessionsInput, Prisma.AccountUncheckedCreateWithoutSessionsInput>;
};
export type AccountUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.AccountUpdateWithoutSessionsInput, Prisma.AccountUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.AccountCreateWithoutSessionsInput, Prisma.AccountUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.AccountWhereInput;
};
export type AccountUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.AccountWhereInput;
    data: Prisma.XOR<Prisma.AccountUpdateWithoutSessionsInput, Prisma.AccountUncheckedUpdateWithoutSessionsInput>;
};
export type AccountUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    is_activated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    activation_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile?: Prisma.ProfileUpdateOneWithoutBy_accountNestedInput;
};
export type AccountUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    is_activated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    activation_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutBy_accountNestedInput;
};
export type AccountCreateWithoutProfileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    type?: $Enums.AccountType;
    email?: string | null;
    username: string;
    password_hash: string;
    is_activated?: boolean;
    activation_link?: string | null;
    sessions?: Prisma.SessionCreateNestedManyWithoutBy_accountInput;
};
export type AccountUncheckedCreateWithoutProfileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    type?: $Enums.AccountType;
    email?: string | null;
    username: string;
    password_hash: string;
    is_activated?: boolean;
    activation_link?: string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutBy_accountInput;
};
export type AccountCreateOrConnectWithoutProfileInput = {
    where: Prisma.AccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountCreateWithoutProfileInput, Prisma.AccountUncheckedCreateWithoutProfileInput>;
};
export type AccountUpsertWithoutProfileInput = {
    update: Prisma.XOR<Prisma.AccountUpdateWithoutProfileInput, Prisma.AccountUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.AccountCreateWithoutProfileInput, Prisma.AccountUncheckedCreateWithoutProfileInput>;
    where?: Prisma.AccountWhereInput;
};
export type AccountUpdateToOneWithWhereWithoutProfileInput = {
    where?: Prisma.AccountWhereInput;
    data: Prisma.XOR<Prisma.AccountUpdateWithoutProfileInput, Prisma.AccountUncheckedUpdateWithoutProfileInput>;
};
export type AccountUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    is_activated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    activation_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUpdateManyWithoutBy_accountNestedInput;
};
export type AccountUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    is_activated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    activation_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutBy_accountNestedInput;
};
export type AccountCountOutputType = {
    sessions: number;
};
export type AccountCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | AccountCountOutputTypeCountSessionsArgs;
};
export type AccountCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountCountOutputTypeSelect<ExtArgs> | null;
};
export type AccountCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
export type AccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    type?: boolean;
    email?: boolean;
    username?: boolean;
    password_hash?: boolean;
    is_activated?: boolean;
    activation_link?: boolean;
    profile?: boolean | Prisma.Account$profileArgs<ExtArgs>;
    sessions?: boolean | Prisma.Account$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AccountCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["account"]>;
export type AccountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    type?: boolean;
    email?: boolean;
    username?: boolean;
    password_hash?: boolean;
    is_activated?: boolean;
    activation_link?: boolean;
}, ExtArgs["result"]["account"]>;
export type AccountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    type?: boolean;
    email?: boolean;
    username?: boolean;
    password_hash?: boolean;
    is_activated?: boolean;
    activation_link?: boolean;
}, ExtArgs["result"]["account"]>;
export type AccountSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    type?: boolean;
    email?: boolean;
    username?: boolean;
    password_hash?: boolean;
    is_activated?: boolean;
    activation_link?: boolean;
};
export type AccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at" | "type" | "email" | "username" | "password_hash" | "is_activated" | "activation_link", ExtArgs["result"]["account"]>;
export type AccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.Account$profileArgs<ExtArgs>;
    sessions?: boolean | Prisma.Account$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AccountCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AccountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AccountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Account";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs> | null;
        sessions: Prisma.$SessionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
        type: $Enums.AccountType;
        email: string | null;
        username: string;
        password_hash: string;
        is_activated: boolean;
        activation_link: string | null;
    }, ExtArgs["result"]["account"]>;
    composites: {};
};
export type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AccountPayload, S>;
export type AccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AccountCountAggregateInputType | true;
};
export interface AccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Account'];
        meta: {
            name: 'Account';
        };
    };
    findUnique<T extends AccountFindUniqueArgs>(args: Prisma.SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AccountFindFirstArgs>(args?: Prisma.SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AccountFindManyArgs>(args?: Prisma.SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AccountCreateArgs>(args: Prisma.SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AccountCreateManyArgs>(args?: Prisma.SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AccountDeleteArgs>(args: Prisma.SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AccountUpdateArgs>(args: Prisma.SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AccountUpdateManyArgs>(args: Prisma.SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AccountUpsertArgs>(args: Prisma.SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AccountCountArgs>(args?: Prisma.Subset<T, AccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AccountCountAggregateOutputType> : number>;
    aggregate<T extends AccountAggregateArgs>(args: Prisma.Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>;
    groupBy<T extends AccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AccountGroupByArgs['orderBy'];
    } : {
        orderBy?: AccountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AccountFieldRefs;
}
export interface Prisma__AccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.Account$profileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Account$profileArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sessions<T extends Prisma.Account$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Account$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AccountFieldRefs {
    readonly id: Prisma.FieldRef<"Account", 'String'>;
    readonly created_at: Prisma.FieldRef<"Account", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Account", 'DateTime'>;
    readonly type: Prisma.FieldRef<"Account", 'AccountType'>;
    readonly email: Prisma.FieldRef<"Account", 'String'>;
    readonly username: Prisma.FieldRef<"Account", 'String'>;
    readonly password_hash: Prisma.FieldRef<"Account", 'String'>;
    readonly is_activated: Prisma.FieldRef<"Account", 'Boolean'>;
    readonly activation_link: Prisma.FieldRef<"Account", 'String'>;
}
export type AccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where: Prisma.AccountWhereUniqueInput;
};
export type AccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where: Prisma.AccountWhereUniqueInput;
};
export type AccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
export type AccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
export type AccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
export type AccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccountCreateInput, Prisma.AccountUncheckedCreateInput>;
};
export type AccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AccountCreateManyInput | Prisma.AccountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AccountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    data: Prisma.AccountCreateManyInput | Prisma.AccountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccountUpdateInput, Prisma.AccountUncheckedUpdateInput>;
    where: Prisma.AccountWhereUniqueInput;
};
export type AccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AccountUpdateManyMutationInput, Prisma.AccountUncheckedUpdateManyInput>;
    where?: Prisma.AccountWhereInput;
    limit?: number;
};
export type AccountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccountUpdateManyMutationInput, Prisma.AccountUncheckedUpdateManyInput>;
    where?: Prisma.AccountWhereInput;
    limit?: number;
};
export type AccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where: Prisma.AccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountCreateInput, Prisma.AccountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AccountUpdateInput, Prisma.AccountUncheckedUpdateInput>;
};
export type AccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where: Prisma.AccountWhereUniqueInput;
};
export type AccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
    limit?: number;
};
export type Account$profileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
export type Account$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Account.d.ts.map