import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnimeBookmarkModel = runtime.Types.Result.DefaultSelection<Prisma.$AnimeBookmarkPayload>;
export type AggregateAnimeBookmark = {
    _count: AnimeBookmarkCountAggregateOutputType | null;
    _avg: AnimeBookmarkAvgAggregateOutputType | null;
    _sum: AnimeBookmarkSumAggregateOutputType | null;
    _min: AnimeBookmarkMinAggregateOutputType | null;
    _max: AnimeBookmarkMaxAggregateOutputType | null;
};
export type AnimeBookmarkAvgAggregateOutputType = {
    anime_id: number | null;
};
export type AnimeBookmarkSumAggregateOutputType = {
    anime_id: number | null;
};
export type AnimeBookmarkMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    profile_id: string | null;
    anime_id: number | null;
    status: $Enums.AnimeStatus | null;
};
export type AnimeBookmarkMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    profile_id: string | null;
    anime_id: number | null;
    status: $Enums.AnimeStatus | null;
};
export type AnimeBookmarkCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    profile_id: number;
    anime_id: number;
    status: number;
    _all: number;
};
export type AnimeBookmarkAvgAggregateInputType = {
    anime_id?: true;
};
export type AnimeBookmarkSumAggregateInputType = {
    anime_id?: true;
};
export type AnimeBookmarkMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    profile_id?: true;
    anime_id?: true;
    status?: true;
};
export type AnimeBookmarkMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    profile_id?: true;
    anime_id?: true;
    status?: true;
};
export type AnimeBookmarkCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    profile_id?: true;
    anime_id?: true;
    status?: true;
    _all?: true;
};
export type AnimeBookmarkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeBookmarkWhereInput;
    orderBy?: Prisma.AnimeBookmarkOrderByWithRelationInput | Prisma.AnimeBookmarkOrderByWithRelationInput[];
    cursor?: Prisma.AnimeBookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnimeBookmarkCountAggregateInputType;
    _avg?: AnimeBookmarkAvgAggregateInputType;
    _sum?: AnimeBookmarkSumAggregateInputType;
    _min?: AnimeBookmarkMinAggregateInputType;
    _max?: AnimeBookmarkMaxAggregateInputType;
};
export type GetAnimeBookmarkAggregateType<T extends AnimeBookmarkAggregateArgs> = {
    [P in keyof T & keyof AggregateAnimeBookmark]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnimeBookmark[P]> : Prisma.GetScalarType<T[P], AggregateAnimeBookmark[P]>;
};
export type AnimeBookmarkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeBookmarkWhereInput;
    orderBy?: Prisma.AnimeBookmarkOrderByWithAggregationInput | Prisma.AnimeBookmarkOrderByWithAggregationInput[];
    by: Prisma.AnimeBookmarkScalarFieldEnum[] | Prisma.AnimeBookmarkScalarFieldEnum;
    having?: Prisma.AnimeBookmarkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnimeBookmarkCountAggregateInputType | true;
    _avg?: AnimeBookmarkAvgAggregateInputType;
    _sum?: AnimeBookmarkSumAggregateInputType;
    _min?: AnimeBookmarkMinAggregateInputType;
    _max?: AnimeBookmarkMaxAggregateInputType;
};
export type AnimeBookmarkGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    profile_id: string;
    anime_id: number;
    status: $Enums.AnimeStatus;
    _count: AnimeBookmarkCountAggregateOutputType | null;
    _avg: AnimeBookmarkAvgAggregateOutputType | null;
    _sum: AnimeBookmarkSumAggregateOutputType | null;
    _min: AnimeBookmarkMinAggregateOutputType | null;
    _max: AnimeBookmarkMaxAggregateOutputType | null;
};
type GetAnimeBookmarkGroupByPayload<T extends AnimeBookmarkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnimeBookmarkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnimeBookmarkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnimeBookmarkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnimeBookmarkGroupByOutputType[P]>;
}>>;
export type AnimeBookmarkWhereInput = {
    AND?: Prisma.AnimeBookmarkWhereInput | Prisma.AnimeBookmarkWhereInput[];
    OR?: Prisma.AnimeBookmarkWhereInput[];
    NOT?: Prisma.AnimeBookmarkWhereInput | Prisma.AnimeBookmarkWhereInput[];
    id?: Prisma.StringFilter<"AnimeBookmark"> | string;
    created_at?: Prisma.DateTimeFilter<"AnimeBookmark"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"AnimeBookmark"> | Date | string;
    profile_id?: Prisma.StringFilter<"AnimeBookmark"> | string;
    anime_id?: Prisma.IntFilter<"AnimeBookmark"> | number;
    status?: Prisma.EnumAnimeStatusFilter<"AnimeBookmark"> | $Enums.AnimeStatus;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type AnimeBookmarkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type AnimeBookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profile_id_anime_id?: Prisma.AnimeBookmarkProfile_idAnime_idCompoundUniqueInput;
    AND?: Prisma.AnimeBookmarkWhereInput | Prisma.AnimeBookmarkWhereInput[];
    OR?: Prisma.AnimeBookmarkWhereInput[];
    NOT?: Prisma.AnimeBookmarkWhereInput | Prisma.AnimeBookmarkWhereInput[];
    created_at?: Prisma.DateTimeFilter<"AnimeBookmark"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"AnimeBookmark"> | Date | string;
    profile_id?: Prisma.StringFilter<"AnimeBookmark"> | string;
    anime_id?: Prisma.IntFilter<"AnimeBookmark"> | number;
    status?: Prisma.EnumAnimeStatusFilter<"AnimeBookmark"> | $Enums.AnimeStatus;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "profile_id_anime_id">;
export type AnimeBookmarkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.AnimeBookmarkCountOrderByAggregateInput;
    _avg?: Prisma.AnimeBookmarkAvgOrderByAggregateInput;
    _max?: Prisma.AnimeBookmarkMaxOrderByAggregateInput;
    _min?: Prisma.AnimeBookmarkMinOrderByAggregateInput;
    _sum?: Prisma.AnimeBookmarkSumOrderByAggregateInput;
};
export type AnimeBookmarkScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnimeBookmarkScalarWhereWithAggregatesInput | Prisma.AnimeBookmarkScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnimeBookmarkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnimeBookmarkScalarWhereWithAggregatesInput | Prisma.AnimeBookmarkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AnimeBookmark"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"AnimeBookmark"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"AnimeBookmark"> | Date | string;
    profile_id?: Prisma.StringWithAggregatesFilter<"AnimeBookmark"> | string;
    anime_id?: Prisma.IntWithAggregatesFilter<"AnimeBookmark"> | number;
    status?: Prisma.EnumAnimeStatusWithAggregatesFilter<"AnimeBookmark"> | $Enums.AnimeStatus;
};
export type AnimeBookmarkCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    anime_id: number;
    status: $Enums.AnimeStatus;
    profile: Prisma.ProfileCreateNestedOneWithoutAnime_bookmarksInput;
};
export type AnimeBookmarkUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile_id: string;
    anime_id: number;
    status: $Enums.AnimeStatus;
};
export type AnimeBookmarkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutAnime_bookmarksNestedInput;
};
export type AnimeBookmarkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
};
export type AnimeBookmarkCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile_id: string;
    anime_id: number;
    status: $Enums.AnimeStatus;
};
export type AnimeBookmarkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
};
export type AnimeBookmarkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
};
export type AnimeBookmarkListRelationFilter = {
    every?: Prisma.AnimeBookmarkWhereInput;
    some?: Prisma.AnimeBookmarkWhereInput;
    none?: Prisma.AnimeBookmarkWhereInput;
};
export type AnimeBookmarkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnimeBookmarkProfile_idAnime_idCompoundUniqueInput = {
    profile_id: string;
    anime_id: number;
};
export type AnimeBookmarkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AnimeBookmarkAvgOrderByAggregateInput = {
    anime_id?: Prisma.SortOrder;
};
export type AnimeBookmarkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AnimeBookmarkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AnimeBookmarkSumOrderByAggregateInput = {
    anime_id?: Prisma.SortOrder;
};
export type AnimeBookmarkCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.AnimeBookmarkCreateWithoutProfileInput, Prisma.AnimeBookmarkUncheckedCreateWithoutProfileInput> | Prisma.AnimeBookmarkCreateWithoutProfileInput[] | Prisma.AnimeBookmarkUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.AnimeBookmarkCreateOrConnectWithoutProfileInput | Prisma.AnimeBookmarkCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.AnimeBookmarkCreateManyProfileInputEnvelope;
    connect?: Prisma.AnimeBookmarkWhereUniqueInput | Prisma.AnimeBookmarkWhereUniqueInput[];
};
export type AnimeBookmarkUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.AnimeBookmarkCreateWithoutProfileInput, Prisma.AnimeBookmarkUncheckedCreateWithoutProfileInput> | Prisma.AnimeBookmarkCreateWithoutProfileInput[] | Prisma.AnimeBookmarkUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.AnimeBookmarkCreateOrConnectWithoutProfileInput | Prisma.AnimeBookmarkCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.AnimeBookmarkCreateManyProfileInputEnvelope;
    connect?: Prisma.AnimeBookmarkWhereUniqueInput | Prisma.AnimeBookmarkWhereUniqueInput[];
};
export type AnimeBookmarkUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.AnimeBookmarkCreateWithoutProfileInput, Prisma.AnimeBookmarkUncheckedCreateWithoutProfileInput> | Prisma.AnimeBookmarkCreateWithoutProfileInput[] | Prisma.AnimeBookmarkUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.AnimeBookmarkCreateOrConnectWithoutProfileInput | Prisma.AnimeBookmarkCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.AnimeBookmarkUpsertWithWhereUniqueWithoutProfileInput | Prisma.AnimeBookmarkUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.AnimeBookmarkCreateManyProfileInputEnvelope;
    set?: Prisma.AnimeBookmarkWhereUniqueInput | Prisma.AnimeBookmarkWhereUniqueInput[];
    disconnect?: Prisma.AnimeBookmarkWhereUniqueInput | Prisma.AnimeBookmarkWhereUniqueInput[];
    delete?: Prisma.AnimeBookmarkWhereUniqueInput | Prisma.AnimeBookmarkWhereUniqueInput[];
    connect?: Prisma.AnimeBookmarkWhereUniqueInput | Prisma.AnimeBookmarkWhereUniqueInput[];
    update?: Prisma.AnimeBookmarkUpdateWithWhereUniqueWithoutProfileInput | Prisma.AnimeBookmarkUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.AnimeBookmarkUpdateManyWithWhereWithoutProfileInput | Prisma.AnimeBookmarkUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.AnimeBookmarkScalarWhereInput | Prisma.AnimeBookmarkScalarWhereInput[];
};
export type AnimeBookmarkUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.AnimeBookmarkCreateWithoutProfileInput, Prisma.AnimeBookmarkUncheckedCreateWithoutProfileInput> | Prisma.AnimeBookmarkCreateWithoutProfileInput[] | Prisma.AnimeBookmarkUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.AnimeBookmarkCreateOrConnectWithoutProfileInput | Prisma.AnimeBookmarkCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.AnimeBookmarkUpsertWithWhereUniqueWithoutProfileInput | Prisma.AnimeBookmarkUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.AnimeBookmarkCreateManyProfileInputEnvelope;
    set?: Prisma.AnimeBookmarkWhereUniqueInput | Prisma.AnimeBookmarkWhereUniqueInput[];
    disconnect?: Prisma.AnimeBookmarkWhereUniqueInput | Prisma.AnimeBookmarkWhereUniqueInput[];
    delete?: Prisma.AnimeBookmarkWhereUniqueInput | Prisma.AnimeBookmarkWhereUniqueInput[];
    connect?: Prisma.AnimeBookmarkWhereUniqueInput | Prisma.AnimeBookmarkWhereUniqueInput[];
    update?: Prisma.AnimeBookmarkUpdateWithWhereUniqueWithoutProfileInput | Prisma.AnimeBookmarkUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.AnimeBookmarkUpdateManyWithWhereWithoutProfileInput | Prisma.AnimeBookmarkUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.AnimeBookmarkScalarWhereInput | Prisma.AnimeBookmarkScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumAnimeStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnimeStatus;
};
export type AnimeBookmarkCreateWithoutProfileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    anime_id: number;
    status: $Enums.AnimeStatus;
};
export type AnimeBookmarkUncheckedCreateWithoutProfileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    anime_id: number;
    status: $Enums.AnimeStatus;
};
export type AnimeBookmarkCreateOrConnectWithoutProfileInput = {
    where: Prisma.AnimeBookmarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnimeBookmarkCreateWithoutProfileInput, Prisma.AnimeBookmarkUncheckedCreateWithoutProfileInput>;
};
export type AnimeBookmarkCreateManyProfileInputEnvelope = {
    data: Prisma.AnimeBookmarkCreateManyProfileInput | Prisma.AnimeBookmarkCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type AnimeBookmarkUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.AnimeBookmarkWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnimeBookmarkUpdateWithoutProfileInput, Prisma.AnimeBookmarkUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.AnimeBookmarkCreateWithoutProfileInput, Prisma.AnimeBookmarkUncheckedCreateWithoutProfileInput>;
};
export type AnimeBookmarkUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.AnimeBookmarkWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnimeBookmarkUpdateWithoutProfileInput, Prisma.AnimeBookmarkUncheckedUpdateWithoutProfileInput>;
};
export type AnimeBookmarkUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.AnimeBookmarkScalarWhereInput;
    data: Prisma.XOR<Prisma.AnimeBookmarkUpdateManyMutationInput, Prisma.AnimeBookmarkUncheckedUpdateManyWithoutProfileInput>;
};
export type AnimeBookmarkScalarWhereInput = {
    AND?: Prisma.AnimeBookmarkScalarWhereInput | Prisma.AnimeBookmarkScalarWhereInput[];
    OR?: Prisma.AnimeBookmarkScalarWhereInput[];
    NOT?: Prisma.AnimeBookmarkScalarWhereInput | Prisma.AnimeBookmarkScalarWhereInput[];
    id?: Prisma.StringFilter<"AnimeBookmark"> | string;
    created_at?: Prisma.DateTimeFilter<"AnimeBookmark"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"AnimeBookmark"> | Date | string;
    profile_id?: Prisma.StringFilter<"AnimeBookmark"> | string;
    anime_id?: Prisma.IntFilter<"AnimeBookmark"> | number;
    status?: Prisma.EnumAnimeStatusFilter<"AnimeBookmark"> | $Enums.AnimeStatus;
};
export type AnimeBookmarkCreateManyProfileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    anime_id: number;
    status: $Enums.AnimeStatus;
};
export type AnimeBookmarkUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
};
export type AnimeBookmarkUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
};
export type AnimeBookmarkUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anime_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
};
export type AnimeBookmarkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    profile_id?: boolean;
    anime_id?: boolean;
    status?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["animeBookmark"]>;
export type AnimeBookmarkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    profile_id?: boolean;
    anime_id?: boolean;
    status?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["animeBookmark"]>;
export type AnimeBookmarkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    profile_id?: boolean;
    anime_id?: boolean;
    status?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["animeBookmark"]>;
export type AnimeBookmarkSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    profile_id?: boolean;
    anime_id?: boolean;
    status?: boolean;
};
export type AnimeBookmarkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at" | "profile_id" | "anime_id" | "status", ExtArgs["result"]["animeBookmark"]>;
export type AnimeBookmarkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type AnimeBookmarkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type AnimeBookmarkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $AnimeBookmarkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnimeBookmark";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
        profile_id: string;
        anime_id: number;
        status: $Enums.AnimeStatus;
    }, ExtArgs["result"]["animeBookmark"]>;
    composites: {};
};
export type AnimeBookmarkGetPayload<S extends boolean | null | undefined | AnimeBookmarkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload, S>;
export type AnimeBookmarkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnimeBookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnimeBookmarkCountAggregateInputType | true;
};
export interface AnimeBookmarkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnimeBookmark'];
        meta: {
            name: 'AnimeBookmark';
        };
    };
    findUnique<T extends AnimeBookmarkFindUniqueArgs>(args: Prisma.SelectSubset<T, AnimeBookmarkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnimeBookmarkClient<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnimeBookmarkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnimeBookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnimeBookmarkClient<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnimeBookmarkFindFirstArgs>(args?: Prisma.SelectSubset<T, AnimeBookmarkFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnimeBookmarkClient<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnimeBookmarkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnimeBookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnimeBookmarkClient<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnimeBookmarkFindManyArgs>(args?: Prisma.SelectSubset<T, AnimeBookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnimeBookmarkCreateArgs>(args: Prisma.SelectSubset<T, AnimeBookmarkCreateArgs<ExtArgs>>): Prisma.Prisma__AnimeBookmarkClient<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnimeBookmarkCreateManyArgs>(args?: Prisma.SelectSubset<T, AnimeBookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnimeBookmarkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnimeBookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnimeBookmarkDeleteArgs>(args: Prisma.SelectSubset<T, AnimeBookmarkDeleteArgs<ExtArgs>>): Prisma.Prisma__AnimeBookmarkClient<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnimeBookmarkUpdateArgs>(args: Prisma.SelectSubset<T, AnimeBookmarkUpdateArgs<ExtArgs>>): Prisma.Prisma__AnimeBookmarkClient<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnimeBookmarkDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnimeBookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnimeBookmarkUpdateManyArgs>(args: Prisma.SelectSubset<T, AnimeBookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnimeBookmarkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnimeBookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnimeBookmarkUpsertArgs>(args: Prisma.SelectSubset<T, AnimeBookmarkUpsertArgs<ExtArgs>>): Prisma.Prisma__AnimeBookmarkClient<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnimeBookmarkCountArgs>(args?: Prisma.Subset<T, AnimeBookmarkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnimeBookmarkCountAggregateOutputType> : number>;
    aggregate<T extends AnimeBookmarkAggregateArgs>(args: Prisma.Subset<T, AnimeBookmarkAggregateArgs>): Prisma.PrismaPromise<GetAnimeBookmarkAggregateType<T>>;
    groupBy<T extends AnimeBookmarkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnimeBookmarkGroupByArgs['orderBy'];
    } : {
        orderBy?: AnimeBookmarkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnimeBookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnimeBookmarkFieldRefs;
}
export interface Prisma__AnimeBookmarkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnimeBookmarkFieldRefs {
    readonly id: Prisma.FieldRef<"AnimeBookmark", 'String'>;
    readonly created_at: Prisma.FieldRef<"AnimeBookmark", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"AnimeBookmark", 'DateTime'>;
    readonly profile_id: Prisma.FieldRef<"AnimeBookmark", 'String'>;
    readonly anime_id: Prisma.FieldRef<"AnimeBookmark", 'Int'>;
    readonly status: Prisma.FieldRef<"AnimeBookmark", 'AnimeStatus'>;
}
export type AnimeBookmarkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
    where: Prisma.AnimeBookmarkWhereUniqueInput;
};
export type AnimeBookmarkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
    where: Prisma.AnimeBookmarkWhereUniqueInput;
};
export type AnimeBookmarkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
    where?: Prisma.AnimeBookmarkWhereInput;
    orderBy?: Prisma.AnimeBookmarkOrderByWithRelationInput | Prisma.AnimeBookmarkOrderByWithRelationInput[];
    cursor?: Prisma.AnimeBookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeBookmarkScalarFieldEnum | Prisma.AnimeBookmarkScalarFieldEnum[];
};
export type AnimeBookmarkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
    where?: Prisma.AnimeBookmarkWhereInput;
    orderBy?: Prisma.AnimeBookmarkOrderByWithRelationInput | Prisma.AnimeBookmarkOrderByWithRelationInput[];
    cursor?: Prisma.AnimeBookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeBookmarkScalarFieldEnum | Prisma.AnimeBookmarkScalarFieldEnum[];
};
export type AnimeBookmarkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
    where?: Prisma.AnimeBookmarkWhereInput;
    orderBy?: Prisma.AnimeBookmarkOrderByWithRelationInput | Prisma.AnimeBookmarkOrderByWithRelationInput[];
    cursor?: Prisma.AnimeBookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeBookmarkScalarFieldEnum | Prisma.AnimeBookmarkScalarFieldEnum[];
};
export type AnimeBookmarkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimeBookmarkCreateInput, Prisma.AnimeBookmarkUncheckedCreateInput>;
};
export type AnimeBookmarkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnimeBookmarkCreateManyInput | Prisma.AnimeBookmarkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnimeBookmarkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    data: Prisma.AnimeBookmarkCreateManyInput | Prisma.AnimeBookmarkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnimeBookmarkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnimeBookmarkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimeBookmarkUpdateInput, Prisma.AnimeBookmarkUncheckedUpdateInput>;
    where: Prisma.AnimeBookmarkWhereUniqueInput;
};
export type AnimeBookmarkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnimeBookmarkUpdateManyMutationInput, Prisma.AnimeBookmarkUncheckedUpdateManyInput>;
    where?: Prisma.AnimeBookmarkWhereInput;
    limit?: number;
};
export type AnimeBookmarkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimeBookmarkUpdateManyMutationInput, Prisma.AnimeBookmarkUncheckedUpdateManyInput>;
    where?: Prisma.AnimeBookmarkWhereInput;
    limit?: number;
    include?: Prisma.AnimeBookmarkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnimeBookmarkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
    where: Prisma.AnimeBookmarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnimeBookmarkCreateInput, Prisma.AnimeBookmarkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnimeBookmarkUpdateInput, Prisma.AnimeBookmarkUncheckedUpdateInput>;
};
export type AnimeBookmarkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
    where: Prisma.AnimeBookmarkWhereUniqueInput;
};
export type AnimeBookmarkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeBookmarkWhereInput;
    limit?: number;
};
export type AnimeBookmarkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AnimeBookmark.d.ts.map