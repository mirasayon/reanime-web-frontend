import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnimeFavoriteModel = runtime.Types.Result.DefaultSelection<Prisma.$AnimeFavoritePayload>;
export type AggregateAnimeFavorite = {
    _count: AnimeFavoriteCountAggregateOutputType | null;
    _avg: AnimeFavoriteAvgAggregateOutputType | null;
    _sum: AnimeFavoriteSumAggregateOutputType | null;
    _min: AnimeFavoriteMinAggregateOutputType | null;
    _max: AnimeFavoriteMaxAggregateOutputType | null;
};
export type AnimeFavoriteAvgAggregateOutputType = {
    anime_id: number | null;
};
export type AnimeFavoriteSumAggregateOutputType = {
    anime_id: number | null;
};
export type AnimeFavoriteMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    profile_id: string | null;
    anime_id: number | null;
    vote: boolean | null;
};
export type AnimeFavoriteMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    profile_id: string | null;
    anime_id: number | null;
    vote: boolean | null;
};
export type AnimeFavoriteCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    profile_id: number;
    anime_id: number;
    vote: number;
    _all: number;
};
export type AnimeFavoriteAvgAggregateInputType = {
    anime_id?: true;
};
export type AnimeFavoriteSumAggregateInputType = {
    anime_id?: true;
};
export type AnimeFavoriteMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    profile_id?: true;
    anime_id?: true;
    vote?: true;
};
export type AnimeFavoriteMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    profile_id?: true;
    anime_id?: true;
    vote?: true;
};
export type AnimeFavoriteCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    profile_id?: true;
    anime_id?: true;
    vote?: true;
    _all?: true;
};
export type AnimeFavoriteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeFavoriteWhereInput;
    orderBy?: Prisma.AnimeFavoriteOrderByWithRelationInput | Prisma.AnimeFavoriteOrderByWithRelationInput[];
    cursor?: Prisma.AnimeFavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnimeFavoriteCountAggregateInputType;
    _avg?: AnimeFavoriteAvgAggregateInputType;
    _sum?: AnimeFavoriteSumAggregateInputType;
    _min?: AnimeFavoriteMinAggregateInputType;
    _max?: AnimeFavoriteMaxAggregateInputType;
};
export type GetAnimeFavoriteAggregateType<T extends AnimeFavoriteAggregateArgs> = {
    [P in keyof T & keyof AggregateAnimeFavorite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnimeFavorite[P]> : Prisma.GetScalarType<T[P], AggregateAnimeFavorite[P]>;
};
export type AnimeFavoriteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeFavoriteWhereInput;
    orderBy?: Prisma.AnimeFavoriteOrderByWithAggregationInput | Prisma.AnimeFavoriteOrderByWithAggregationInput[];
    by: Prisma.AnimeFavoriteScalarFieldEnum[] | Prisma.AnimeFavoriteScalarFieldEnum;
    having?: Prisma.AnimeFavoriteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnimeFavoriteCountAggregateInputType | true;
    _avg?: AnimeFavoriteAvgAggregateInputType;
    _sum?: AnimeFavoriteSumAggregateInputType;
    _min?: AnimeFavoriteMinAggregateInputType;
    _max?: AnimeFavoriteMaxAggregateInputType;
};
export type AnimeFavoriteGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    profile_id: string;
    anime_id: number;
    vote: boolean;
    _count: AnimeFavoriteCountAggregateOutputType | null;
    _avg: AnimeFavoriteAvgAggregateOutputType | null;
    _sum: AnimeFavoriteSumAggregateOutputType | null;
    _min: AnimeFavoriteMinAggregateOutputType | null;
    _max: AnimeFavoriteMaxAggregateOutputType | null;
};
type GetAnimeFavoriteGroupByPayload<T extends AnimeFavoriteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnimeFavoriteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnimeFavoriteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnimeFavoriteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnimeFavoriteGroupByOutputType[P]>;
}>>;
export type AnimeFavoriteWhereInput = {
    AND?: Prisma.AnimeFavoriteWhereInput | Prisma.AnimeFavoriteWhereInput[];
    OR?: Prisma.AnimeFavoriteWhereInput[];
    NOT?: Prisma.AnimeFavoriteWhereInput | Prisma.AnimeFavoriteWhereInput[];
    id?: Prisma.StringFilter<"AnimeFavorite"> | string;
    created_at?: Prisma.DateTimeFilter<"AnimeFavorite"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"AnimeFavorite"> | Date | string;
    profile_id?: Prisma.StringFilter<"AnimeFavorite"> | string;
    anime_id?: Prisma.IntFilter<"AnimeFavorite"> | number;
    vote?: Prisma.BoolFilter<"AnimeFavorite"> | boolean;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type AnimeFavoriteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type AnimeFavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profile_id_anime_id?: Prisma.AnimeFavoriteProfile_idAnime_idCompoundUniqueInput;
    AND?: Prisma.AnimeFavoriteWhereInput | Prisma.AnimeFavoriteWhereInput[];
    OR?: Prisma.AnimeFavoriteWhereInput[];
    NOT?: Prisma.AnimeFavoriteWhereInput | Prisma.AnimeFavoriteWhereInput[];
    created_at?: Prisma.DateTimeFilter<"AnimeFavorite"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"AnimeFavorite"> | Date | string;
    profile_id?: Prisma.StringFilter<"AnimeFavorite"> | string;
    anime_id?: Prisma.IntFilter<"AnimeFavorite"> | number;
    vote?: Prisma.BoolFilter<"AnimeFavorite"> | boolean;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "profile_id_anime_id">;
export type AnimeFavoriteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    _count?: Prisma.AnimeFavoriteCountOrderByAggregateInput;
    _avg?: Prisma.AnimeFavoriteAvgOrderByAggregateInput;
    _max?: Prisma.AnimeFavoriteMaxOrderByAggregateInput;
    _min?: Prisma.AnimeFavoriteMinOrderByAggregateInput;
    _sum?: Prisma.AnimeFavoriteSumOrderByAggregateInput;
};
export type AnimeFavoriteScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnimeFavoriteScalarWhereWithAggregatesInput | Prisma.AnimeFavoriteScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnimeFavoriteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnimeFavoriteScalarWhereWithAggregatesInput | Prisma.AnimeFavoriteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AnimeFavorite"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"AnimeFavorite"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"AnimeFavorite"> | Date | string;
    profile_id?: Prisma.StringWithAggregatesFilter<"AnimeFavorite"> | string;
    anime_id?: Prisma.IntWithAggregatesFilter<"AnimeFavorite"> | number;
    vote?: Prisma.BoolWithAggregatesFilter<"AnimeFavorite"> | boolean;
};
export type AnimeFavoriteCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    anime_id: number;
    vote: boolean;
    profile: Prisma.ProfileCreateNestedOneWithoutAnime_votesInput;
};
export type AnimeFavoriteUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile_id: string;
    anime_id: number;
    vote: boolean;
};
export type AnimeFavoriteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutAnime_votesNestedInput;
};
export type AnimeFavoriteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AnimeFavoriteCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile_id: string;
    anime_id: number;
    vote: boolean;
};
export type AnimeFavoriteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AnimeFavoriteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AnimeFavoriteListRelationFilter = {
    every?: Prisma.AnimeFavoriteWhereInput;
    some?: Prisma.AnimeFavoriteWhereInput;
    none?: Prisma.AnimeFavoriteWhereInput;
};
export type AnimeFavoriteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnimeFavoriteProfile_idAnime_idCompoundUniqueInput = {
    profile_id: string;
    anime_id: number;
};
export type AnimeFavoriteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
};
export type AnimeFavoriteAvgOrderByAggregateInput = {
    anime_id?: Prisma.SortOrder;
};
export type AnimeFavoriteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
};
export type AnimeFavoriteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
};
export type AnimeFavoriteSumOrderByAggregateInput = {
    anime_id?: Prisma.SortOrder;
};
export type AnimeFavoriteCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.AnimeFavoriteCreateWithoutProfileInput, Prisma.AnimeFavoriteUncheckedCreateWithoutProfileInput> | Prisma.AnimeFavoriteCreateWithoutProfileInput[] | Prisma.AnimeFavoriteUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.AnimeFavoriteCreateOrConnectWithoutProfileInput | Prisma.AnimeFavoriteCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.AnimeFavoriteCreateManyProfileInputEnvelope;
    connect?: Prisma.AnimeFavoriteWhereUniqueInput | Prisma.AnimeFavoriteWhereUniqueInput[];
};
export type AnimeFavoriteUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.AnimeFavoriteCreateWithoutProfileInput, Prisma.AnimeFavoriteUncheckedCreateWithoutProfileInput> | Prisma.AnimeFavoriteCreateWithoutProfileInput[] | Prisma.AnimeFavoriteUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.AnimeFavoriteCreateOrConnectWithoutProfileInput | Prisma.AnimeFavoriteCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.AnimeFavoriteCreateManyProfileInputEnvelope;
    connect?: Prisma.AnimeFavoriteWhereUniqueInput | Prisma.AnimeFavoriteWhereUniqueInput[];
};
export type AnimeFavoriteUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.AnimeFavoriteCreateWithoutProfileInput, Prisma.AnimeFavoriteUncheckedCreateWithoutProfileInput> | Prisma.AnimeFavoriteCreateWithoutProfileInput[] | Prisma.AnimeFavoriteUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.AnimeFavoriteCreateOrConnectWithoutProfileInput | Prisma.AnimeFavoriteCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.AnimeFavoriteUpsertWithWhereUniqueWithoutProfileInput | Prisma.AnimeFavoriteUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.AnimeFavoriteCreateManyProfileInputEnvelope;
    set?: Prisma.AnimeFavoriteWhereUniqueInput | Prisma.AnimeFavoriteWhereUniqueInput[];
    disconnect?: Prisma.AnimeFavoriteWhereUniqueInput | Prisma.AnimeFavoriteWhereUniqueInput[];
    delete?: Prisma.AnimeFavoriteWhereUniqueInput | Prisma.AnimeFavoriteWhereUniqueInput[];
    connect?: Prisma.AnimeFavoriteWhereUniqueInput | Prisma.AnimeFavoriteWhereUniqueInput[];
    update?: Prisma.AnimeFavoriteUpdateWithWhereUniqueWithoutProfileInput | Prisma.AnimeFavoriteUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.AnimeFavoriteUpdateManyWithWhereWithoutProfileInput | Prisma.AnimeFavoriteUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.AnimeFavoriteScalarWhereInput | Prisma.AnimeFavoriteScalarWhereInput[];
};
export type AnimeFavoriteUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.AnimeFavoriteCreateWithoutProfileInput, Prisma.AnimeFavoriteUncheckedCreateWithoutProfileInput> | Prisma.AnimeFavoriteCreateWithoutProfileInput[] | Prisma.AnimeFavoriteUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.AnimeFavoriteCreateOrConnectWithoutProfileInput | Prisma.AnimeFavoriteCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.AnimeFavoriteUpsertWithWhereUniqueWithoutProfileInput | Prisma.AnimeFavoriteUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.AnimeFavoriteCreateManyProfileInputEnvelope;
    set?: Prisma.AnimeFavoriteWhereUniqueInput | Prisma.AnimeFavoriteWhereUniqueInput[];
    disconnect?: Prisma.AnimeFavoriteWhereUniqueInput | Prisma.AnimeFavoriteWhereUniqueInput[];
    delete?: Prisma.AnimeFavoriteWhereUniqueInput | Prisma.AnimeFavoriteWhereUniqueInput[];
    connect?: Prisma.AnimeFavoriteWhereUniqueInput | Prisma.AnimeFavoriteWhereUniqueInput[];
    update?: Prisma.AnimeFavoriteUpdateWithWhereUniqueWithoutProfileInput | Prisma.AnimeFavoriteUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.AnimeFavoriteUpdateManyWithWhereWithoutProfileInput | Prisma.AnimeFavoriteUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.AnimeFavoriteScalarWhereInput | Prisma.AnimeFavoriteScalarWhereInput[];
};
export type AnimeFavoriteCreateWithoutProfileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    anime_id: number;
    vote: boolean;
};
export type AnimeFavoriteUncheckedCreateWithoutProfileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    anime_id: number;
    vote: boolean;
};
export type AnimeFavoriteCreateOrConnectWithoutProfileInput = {
    where: Prisma.AnimeFavoriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnimeFavoriteCreateWithoutProfileInput, Prisma.AnimeFavoriteUncheckedCreateWithoutProfileInput>;
};
export type AnimeFavoriteCreateManyProfileInputEnvelope = {
    data: Prisma.AnimeFavoriteCreateManyProfileInput | Prisma.AnimeFavoriteCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type AnimeFavoriteUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.AnimeFavoriteWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnimeFavoriteUpdateWithoutProfileInput, Prisma.AnimeFavoriteUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.AnimeFavoriteCreateWithoutProfileInput, Prisma.AnimeFavoriteUncheckedCreateWithoutProfileInput>;
};
export type AnimeFavoriteUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.AnimeFavoriteWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnimeFavoriteUpdateWithoutProfileInput, Prisma.AnimeFavoriteUncheckedUpdateWithoutProfileInput>;
};
export type AnimeFavoriteUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.AnimeFavoriteScalarWhereInput;
    data: Prisma.XOR<Prisma.AnimeFavoriteUpdateManyMutationInput, Prisma.AnimeFavoriteUncheckedUpdateManyWithoutProfileInput>;
};
export type AnimeFavoriteScalarWhereInput = {
    AND?: Prisma.AnimeFavoriteScalarWhereInput | Prisma.AnimeFavoriteScalarWhereInput[];
    OR?: Prisma.AnimeFavoriteScalarWhereInput[];
    NOT?: Prisma.AnimeFavoriteScalarWhereInput | Prisma.AnimeFavoriteScalarWhereInput[];
    id?: Prisma.StringFilter<"AnimeFavorite"> | string;
    created_at?: Prisma.DateTimeFilter<"AnimeFavorite"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"AnimeFavorite"> | Date | string;
    profile_id?: Prisma.StringFilter<"AnimeFavorite"> | string;
    anime_id?: Prisma.IntFilter<"AnimeFavorite"> | number;
    vote?: Prisma.BoolFilter<"AnimeFavorite"> | boolean;
};
export type AnimeFavoriteCreateManyProfileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    anime_id: number;
    vote: boolean;
};
export type AnimeFavoriteUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AnimeFavoriteUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AnimeFavoriteUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AnimeFavoriteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    profile_id?: boolean;
    anime_id?: boolean;
    vote?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["animeFavorite"]>;
export type AnimeFavoriteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    profile_id?: boolean;
    anime_id?: boolean;
    vote?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["animeFavorite"]>;
export type AnimeFavoriteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    profile_id?: boolean;
    anime_id?: boolean;
    vote?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["animeFavorite"]>;
export type AnimeFavoriteSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    profile_id?: boolean;
    anime_id?: boolean;
    vote?: boolean;
};
export type AnimeFavoriteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at" | "profile_id" | "anime_id" | "vote", ExtArgs["result"]["animeFavorite"]>;
export type AnimeFavoriteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type AnimeFavoriteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type AnimeFavoriteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $AnimeFavoritePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnimeFavorite";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
        profile_id: string;
        anime_id: number;
        vote: boolean;
    }, ExtArgs["result"]["animeFavorite"]>;
    composites: {};
};
export type AnimeFavoriteGetPayload<S extends boolean | null | undefined | AnimeFavoriteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload, S>;
export type AnimeFavoriteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnimeFavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnimeFavoriteCountAggregateInputType | true;
};
export interface AnimeFavoriteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnimeFavorite'];
        meta: {
            name: 'AnimeFavorite';
        };
    };
    findUnique<T extends AnimeFavoriteFindUniqueArgs>(args: Prisma.SelectSubset<T, AnimeFavoriteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnimeFavoriteClient<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnimeFavoriteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnimeFavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnimeFavoriteClient<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnimeFavoriteFindFirstArgs>(args?: Prisma.SelectSubset<T, AnimeFavoriteFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnimeFavoriteClient<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnimeFavoriteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnimeFavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnimeFavoriteClient<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnimeFavoriteFindManyArgs>(args?: Prisma.SelectSubset<T, AnimeFavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnimeFavoriteCreateArgs>(args: Prisma.SelectSubset<T, AnimeFavoriteCreateArgs<ExtArgs>>): Prisma.Prisma__AnimeFavoriteClient<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnimeFavoriteCreateManyArgs>(args?: Prisma.SelectSubset<T, AnimeFavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnimeFavoriteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnimeFavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnimeFavoriteDeleteArgs>(args: Prisma.SelectSubset<T, AnimeFavoriteDeleteArgs<ExtArgs>>): Prisma.Prisma__AnimeFavoriteClient<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnimeFavoriteUpdateArgs>(args: Prisma.SelectSubset<T, AnimeFavoriteUpdateArgs<ExtArgs>>): Prisma.Prisma__AnimeFavoriteClient<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnimeFavoriteDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnimeFavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnimeFavoriteUpdateManyArgs>(args: Prisma.SelectSubset<T, AnimeFavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnimeFavoriteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnimeFavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnimeFavoriteUpsertArgs>(args: Prisma.SelectSubset<T, AnimeFavoriteUpsertArgs<ExtArgs>>): Prisma.Prisma__AnimeFavoriteClient<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnimeFavoriteCountArgs>(args?: Prisma.Subset<T, AnimeFavoriteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnimeFavoriteCountAggregateOutputType> : number>;
    aggregate<T extends AnimeFavoriteAggregateArgs>(args: Prisma.Subset<T, AnimeFavoriteAggregateArgs>): Prisma.PrismaPromise<GetAnimeFavoriteAggregateType<T>>;
    groupBy<T extends AnimeFavoriteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnimeFavoriteGroupByArgs['orderBy'];
    } : {
        orderBy?: AnimeFavoriteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnimeFavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnimeFavoriteFieldRefs;
}
export interface Prisma__AnimeFavoriteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnimeFavoriteFieldRefs {
    readonly id: Prisma.FieldRef<"AnimeFavorite", 'String'>;
    readonly created_at: Prisma.FieldRef<"AnimeFavorite", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"AnimeFavorite", 'DateTime'>;
    readonly profile_id: Prisma.FieldRef<"AnimeFavorite", 'String'>;
    readonly anime_id: Prisma.FieldRef<"AnimeFavorite", 'Int'>;
    readonly vote: Prisma.FieldRef<"AnimeFavorite", 'Boolean'>;
}
export type AnimeFavoriteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
    where: Prisma.AnimeFavoriteWhereUniqueInput;
};
export type AnimeFavoriteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
    where: Prisma.AnimeFavoriteWhereUniqueInput;
};
export type AnimeFavoriteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
    where?: Prisma.AnimeFavoriteWhereInput;
    orderBy?: Prisma.AnimeFavoriteOrderByWithRelationInput | Prisma.AnimeFavoriteOrderByWithRelationInput[];
    cursor?: Prisma.AnimeFavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeFavoriteScalarFieldEnum | Prisma.AnimeFavoriteScalarFieldEnum[];
};
export type AnimeFavoriteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
    where?: Prisma.AnimeFavoriteWhereInput;
    orderBy?: Prisma.AnimeFavoriteOrderByWithRelationInput | Prisma.AnimeFavoriteOrderByWithRelationInput[];
    cursor?: Prisma.AnimeFavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeFavoriteScalarFieldEnum | Prisma.AnimeFavoriteScalarFieldEnum[];
};
export type AnimeFavoriteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
    where?: Prisma.AnimeFavoriteWhereInput;
    orderBy?: Prisma.AnimeFavoriteOrderByWithRelationInput | Prisma.AnimeFavoriteOrderByWithRelationInput[];
    cursor?: Prisma.AnimeFavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeFavoriteScalarFieldEnum | Prisma.AnimeFavoriteScalarFieldEnum[];
};
export type AnimeFavoriteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimeFavoriteCreateInput, Prisma.AnimeFavoriteUncheckedCreateInput>;
};
export type AnimeFavoriteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnimeFavoriteCreateManyInput | Prisma.AnimeFavoriteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnimeFavoriteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    data: Prisma.AnimeFavoriteCreateManyInput | Prisma.AnimeFavoriteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnimeFavoriteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnimeFavoriteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimeFavoriteUpdateInput, Prisma.AnimeFavoriteUncheckedUpdateInput>;
    where: Prisma.AnimeFavoriteWhereUniqueInput;
};
export type AnimeFavoriteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnimeFavoriteUpdateManyMutationInput, Prisma.AnimeFavoriteUncheckedUpdateManyInput>;
    where?: Prisma.AnimeFavoriteWhereInput;
    limit?: number;
};
export type AnimeFavoriteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimeFavoriteUpdateManyMutationInput, Prisma.AnimeFavoriteUncheckedUpdateManyInput>;
    where?: Prisma.AnimeFavoriteWhereInput;
    limit?: number;
    include?: Prisma.AnimeFavoriteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnimeFavoriteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
    where: Prisma.AnimeFavoriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnimeFavoriteCreateInput, Prisma.AnimeFavoriteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnimeFavoriteUpdateInput, Prisma.AnimeFavoriteUncheckedUpdateInput>;
};
export type AnimeFavoriteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
    where: Prisma.AnimeFavoriteWhereUniqueInput;
};
export type AnimeFavoriteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeFavoriteWhereInput;
    limit?: number;
};
export type AnimeFavoriteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AnimeFavorite.d.ts.map