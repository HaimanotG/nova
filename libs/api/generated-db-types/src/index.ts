import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import * as Validator from 'class-validator';

export enum VerificationTokenScalarFieldEnum {
    identifier = "identifier",
    token = "token",
    expires = "expires"
}

export enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    emailVerified = "emailVerified",
    image = "image"
}

export enum TodoScalarFieldEnum {
    id = "id",
    text = "text",
    completed = "completed",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SessionScalarFieldEnum {
    id = "id",
    sessionToken = "sessionToken",
    userId = "userId",
    expires = "expires"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum ExampleScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum AccountScalarFieldEnum {
    id = "id",
    userId = "userId",
    type = "type",
    provider = "provider",
    providerAccountId = "providerAccountId",
    refresh_token = "refresh_token",
    access_token = "access_token",
    expires_at = "expires_at",
    token_type = "token_type",
    scope = "scope",
    id_token = "id_token",
    session_state = "session_state"
}

registerEnumType(AccountScalarFieldEnum, { name: 'AccountScalarFieldEnum', description: undefined })
registerEnumType(ExampleScalarFieldEnum, { name: 'ExampleScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(SessionScalarFieldEnum, { name: 'SessionScalarFieldEnum', description: undefined })
registerEnumType(TodoScalarFieldEnum, { name: 'TodoScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
registerEnumType(VerificationTokenScalarFieldEnum, { name: 'VerificationTokenScalarFieldEnum', description: undefined })

@ArgsType()
export class AccountAggregateArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AccountCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    @Field(() => AccountAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AccountAvgAggregateInput>;
    @Field(() => AccountSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AccountSumAggregateInput>;
    @Field(() => AccountMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    @Field(() => AccountMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}

@InputType()
export class AccountAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    expires_at?: true;
}

@ObjectType()
export class AccountAvgAggregate {
    @Field(() => Float, {nullable:true})
    expires_at?: number;
}

@InputType()
export class AccountAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
}

@InputType()
export class AccountCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    providerAccountId?: true;
    @Field(() => Boolean, {nullable:true})
    refresh_token?: true;
    @Field(() => Boolean, {nullable:true})
    access_token?: true;
    @Field(() => Boolean, {nullable:true})
    expires_at?: true;
    @Field(() => Boolean, {nullable:true})
    token_type?: true;
    @Field(() => Boolean, {nullable:true})
    scope?: true;
    @Field(() => Boolean, {nullable:true})
    id_token?: true;
    @Field(() => Boolean, {nullable:true})
    session_state?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class AccountCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    type!: number;
    @Field(() => Int, {nullable:false})
    provider!: number;
    @Field(() => Int, {nullable:false})
    providerAccountId!: number;
    @Field(() => Int, {nullable:false})
    refresh_token!: number;
    @Field(() => Int, {nullable:false})
    access_token!: number;
    @Field(() => Int, {nullable:false})
    expires_at!: number;
    @Field(() => Int, {nullable:false})
    token_type!: number;
    @Field(() => Int, {nullable:false})
    scope!: number;
    @Field(() => Int, {nullable:false})
    id_token!: number;
    @Field(() => Int, {nullable:false})
    session_state!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class AccountCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
}

@InputType()
export class AccountCreateManyUserInputEnvelope {
    @Field(() => [AccountCreateManyUserInput], {nullable:false})
    @Type(() => AccountCreateManyUserInput)
    data!: Array<AccountCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class AccountCreateManyUserInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountCreateManyInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountCreateNestedManyWithoutUserInput {
    @Field(() => [AccountCreateWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateWithoutUserInput)
    create?: Array<AccountCreateWithoutUserInput>;
    @Field(() => [AccountCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    @Field(() => AccountCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;
}

@InputType()
export class AccountCreateOrConnectWithoutUserInput {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountCreateWithoutUserInput, {nullable:false})
    @Type(() => AccountCreateWithoutUserInput)
    create!: InstanceType<typeof AccountCreateWithoutUserInput>;
}

@InputType()
export class AccountCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
    @Field(() => UserCreateNestedOneWithoutAccountInput, {nullable:false})
    User!: InstanceType<typeof UserCreateNestedOneWithoutAccountInput>;
}

@ArgsType()
export class AccountGroupByArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithAggregationInput>;
    @Field(() => [AccountScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AccountScalarFieldEnum>;
    @Field(() => AccountScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof AccountScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AccountCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    @Field(() => AccountAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AccountAvgAggregateInput>;
    @Field(() => AccountSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AccountSumAggregateInput>;
    @Field(() => AccountMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    @Field(() => AccountMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}

@ObjectType()
export class AccountGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
    @Field(() => AccountCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregate>;
    @Field(() => AccountAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    @Field(() => AccountSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof AccountSumAggregate>;
    @Field(() => AccountMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregate>;
    @Field(() => AccountMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregate>;
}

@InputType()
export class AccountListRelationFilter {
    @Field(() => AccountWhereInput, {nullable:true})
    every?: InstanceType<typeof AccountWhereInput>;
    @Field(() => AccountWhereInput, {nullable:true})
    some?: InstanceType<typeof AccountWhereInput>;
    @Field(() => AccountWhereInput, {nullable:true})
    none?: InstanceType<typeof AccountWhereInput>;
}

@InputType()
export class AccountMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    providerAccountId?: true;
    @Field(() => Boolean, {nullable:true})
    refresh_token?: true;
    @Field(() => Boolean, {nullable:true})
    access_token?: true;
    @Field(() => Boolean, {nullable:true})
    expires_at?: true;
    @Field(() => Boolean, {nullable:true})
    token_type?: true;
    @Field(() => Boolean, {nullable:true})
    scope?: true;
    @Field(() => Boolean, {nullable:true})
    id_token?: true;
    @Field(() => Boolean, {nullable:true})
    session_state?: true;
}

@ObjectType()
export class AccountMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
}

@InputType()
export class AccountMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    providerAccountId?: true;
    @Field(() => Boolean, {nullable:true})
    refresh_token?: true;
    @Field(() => Boolean, {nullable:true})
    access_token?: true;
    @Field(() => Boolean, {nullable:true})
    expires_at?: true;
    @Field(() => Boolean, {nullable:true})
    token_type?: true;
    @Field(() => Boolean, {nullable:true})
    scope?: true;
    @Field(() => Boolean, {nullable:true})
    id_token?: true;
    @Field(() => Boolean, {nullable:true})
    session_state?: true;
}

@ObjectType()
export class AccountMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
}

@InputType()
export class AccountOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class AccountOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
    @Field(() => AccountCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AccountCountOrderByAggregateInput>;
    @Field(() => AccountAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AccountAvgOrderByAggregateInput>;
    @Field(() => AccountMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AccountMaxOrderByAggregateInput>;
    @Field(() => AccountMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AccountMinOrderByAggregateInput>;
    @Field(() => AccountSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AccountSumOrderByAggregateInput>;
}

@InputType()
export class AccountOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class AccountProviderProviderAccountIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
}

@InputType()
export class AccountScalarWhereWithAggregatesInput {
    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AccountScalarWhereWithAggregatesInput>;
    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AccountScalarWhereWithAggregatesInput>;
    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AccountScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    provider?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    providerAccountId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    refresh_token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    access_token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    expires_at?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token_type?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    scope?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id_token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    session_state?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class AccountScalarWhereInput {
    @Field(() => [AccountScalarWhereInput], {nullable:true})
    AND?: Array<AccountScalarWhereInput>;
    @Field(() => [AccountScalarWhereInput], {nullable:true})
    OR?: Array<AccountScalarWhereInput>;
    @Field(() => [AccountScalarWhereInput], {nullable:true})
    NOT?: Array<AccountScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    provider?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    providerAccountId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    refresh_token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    access_token?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    expires_at?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    token_type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    scope?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    id_token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    session_state?: InstanceType<typeof StringFilter>;
}

@InputType()
export class AccountSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    expires_at?: true;
}

@ObjectType()
export class AccountSumAggregate {
    @Field(() => Int, {nullable:true})
    expires_at?: number;
}

@InputType()
export class AccountSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
}

@InputType()
export class AccountUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [AccountCreateWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateWithoutUserInput)
    create?: Array<AccountCreateWithoutUserInput>;
    @Field(() => [AccountCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    @Field(() => AccountCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;
}

@InputType()
export class AccountUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateManyWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [AccountCreateWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateWithoutUserInput)
    create?: Array<AccountCreateWithoutUserInput>;
    @Field(() => [AccountCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    @Field(() => [AccountUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccountUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => AccountCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    set?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    disconnect?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    delete?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccountUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [AccountUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AccountUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [AccountScalarWhereInput], {nullable:true})
    @Type(() => AccountScalarWhereInput)
    deleteMany?: Array<AccountScalarWhereInput>;
}

@InputType()
export class AccountUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUpdateManyWithWhereWithoutUserInput {
    @Field(() => AccountScalarWhereInput, {nullable:false})
    @Type(() => AccountScalarWhereInput)
    where!: InstanceType<typeof AccountScalarWhereInput>;
    @Field(() => AccountUpdateManyMutationInput, {nullable:false})
    @Type(() => AccountUpdateManyMutationInput)
    data!: InstanceType<typeof AccountUpdateManyMutationInput>;
}

@InputType()
export class AccountUpdateManyWithoutUserNestedInput {
    @Field(() => [AccountCreateWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateWithoutUserInput)
    create?: Array<AccountCreateWithoutUserInput>;
    @Field(() => [AccountCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    @Field(() => [AccountUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccountUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => AccountCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    set?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    disconnect?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    delete?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccountUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [AccountUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AccountUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [AccountScalarWhereInput], {nullable:true})
    @Type(() => AccountScalarWhereInput)
    deleteMany?: Array<AccountScalarWhereInput>;
}

@InputType()
export class AccountUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountUpdateWithoutUserInput, {nullable:false})
    @Type(() => AccountUpdateWithoutUserInput)
    data!: InstanceType<typeof AccountUpdateWithoutUserInput>;
}

@InputType()
export class AccountUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
    @Field(() => UserUpdateOneRequiredWithoutAccountNestedInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountNestedInput>;
}

@InputType()
export class AccountUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountUpdateWithoutUserInput, {nullable:false})
    @Type(() => AccountUpdateWithoutUserInput)
    update!: InstanceType<typeof AccountUpdateWithoutUserInput>;
    @Field(() => AccountCreateWithoutUserInput, {nullable:false})
    @Type(() => AccountCreateWithoutUserInput)
    create!: InstanceType<typeof AccountCreateWithoutUserInput>;
}

@InputType()
export class AccountWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => AccountProviderProviderAccountIdCompoundUniqueInput, {nullable:true})
    provider_providerAccountId?: InstanceType<typeof AccountProviderProviderAccountIdCompoundUniqueInput>;
}

@InputType()
export class AccountWhereInput {
    @Field(() => [AccountWhereInput], {nullable:true})
    AND?: Array<AccountWhereInput>;
    @Field(() => [AccountWhereInput], {nullable:true})
    OR?: Array<AccountWhereInput>;
    @Field(() => [AccountWhereInput], {nullable:true})
    NOT?: Array<AccountWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    provider?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    providerAccountId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    refresh_token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    access_token?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    expires_at?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    token_type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    scope?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    id_token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    session_state?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Account {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token!: string | null;
    @Field(() => String, {nullable:true})
    access_token!: string | null;
    @Field(() => Int, {nullable:true})
    expires_at!: number | null;
    @Field(() => String, {nullable:true})
    token_type!: string | null;
    @Field(() => String, {nullable:true})
    scope!: string | null;
    @Field(() => String, {nullable:true})
    id_token!: string | null;
    @Field(() => String, {nullable:true})
    session_state!: string | null;
    @Field(() => User, {nullable:false})
    User?: InstanceType<typeof User>;
}

@ObjectType()
export class AggregateAccount {
    @Field(() => AccountCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregate>;
    @Field(() => AccountAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    @Field(() => AccountSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof AccountSumAggregate>;
    @Field(() => AccountMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregate>;
    @Field(() => AccountMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregate>;
}

@ArgsType()
export class CreateManyAccountArgs {
    @Field(() => [AccountCreateManyInput], {nullable:false})
    @Type(() => AccountCreateManyInput)
    @ValidateNested()
    data!: Array<AccountCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneAccountArgs {
    @Field(() => AccountCreateInput, {nullable:false})
    @Type(() => AccountCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof AccountCreateInput>;
}

@ArgsType()
export class DeleteManyAccountArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
}

@ArgsType()
export class DeleteOneAccountArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class FindFirstAccountOrThrowArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindFirstAccountArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindManyAccountArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueAccountOrThrowArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueAccountArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyAccountArgs {
    @Field(() => AccountUpdateManyMutationInput, {nullable:false})
    @Type(() => AccountUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof AccountUpdateManyMutationInput>;
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
}

@ArgsType()
export class UpdateOneAccountArgs {
    @Field(() => AccountUpdateInput, {nullable:false})
    @Type(() => AccountUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof AccountUpdateInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneAccountArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountCreateInput, {nullable:false})
    @Type(() => AccountCreateInput)
    create!: InstanceType<typeof AccountCreateInput>;
    @Field(() => AccountUpdateInput, {nullable:false})
    @Type(() => AccountUpdateInput)
    update!: InstanceType<typeof AccountUpdateInput>;
}

@ObjectType()
export class AggregateExample {
    @Field(() => ExampleCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ExampleCountAggregate>;
    @Field(() => ExampleMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ExampleMinAggregate>;
    @Field(() => ExampleMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ExampleMaxAggregate>;
}

@ArgsType()
export class CreateManyExampleArgs {
    @Field(() => [ExampleCreateManyInput], {nullable:false})
    @Type(() => ExampleCreateManyInput)
    @ValidateNested()
    data!: Array<ExampleCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneExampleArgs {
    @Field(() => ExampleCreateInput, {nullable:false})
    @Type(() => ExampleCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ExampleCreateInput>;
}

@ArgsType()
export class DeleteManyExampleArgs {
    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ExampleWhereInput>;
}

@ArgsType()
export class DeleteOneExampleArgs {
    @Field(() => ExampleWhereUniqueInput, {nullable:false})
    @Type(() => ExampleWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ExampleWhereUniqueInput>;
}

@ArgsType()
export class ExampleAggregateArgs {
    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ExampleWhereInput>;
    @Field(() => [ExampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExampleOrderByWithRelationInput>;
    @Field(() => ExampleWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ExampleWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ExampleCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ExampleCountAggregateInput>;
    @Field(() => ExampleMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ExampleMinAggregateInput>;
    @Field(() => ExampleMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ExampleMaxAggregateInput>;
}

@InputType()
export class ExampleCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ExampleCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ExampleCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ExampleCreateManyInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@InputType()
export class ExampleCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@ArgsType()
export class ExampleGroupByArgs {
    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ExampleWhereInput>;
    @Field(() => [ExampleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExampleOrderByWithAggregationInput>;
    @Field(() => [ExampleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ExampleScalarFieldEnum>;
    @Field(() => ExampleScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ExampleScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ExampleCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ExampleCountAggregateInput>;
    @Field(() => ExampleMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ExampleMinAggregateInput>;
    @Field(() => ExampleMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ExampleMaxAggregateInput>;
}

@ObjectType()
export class ExampleGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => ExampleCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ExampleCountAggregate>;
    @Field(() => ExampleMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ExampleMinAggregate>;
    @Field(() => ExampleMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ExampleMaxAggregate>;
}

@InputType()
export class ExampleMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ExampleMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExampleMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ExampleMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ExampleMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExampleMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ExampleOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ExampleCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ExampleCountOrderByAggregateInput>;
    @Field(() => ExampleMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ExampleMaxOrderByAggregateInput>;
    @Field(() => ExampleMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ExampleMinOrderByAggregateInput>;
}

@InputType()
export class ExampleOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ExampleScalarWhereWithAggregatesInput {
    @Field(() => [ExampleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExampleScalarWhereWithAggregatesInput>;
    @Field(() => [ExampleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExampleScalarWhereWithAggregatesInput>;
    @Field(() => [ExampleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExampleScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ExampleUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@InputType()
export class ExampleUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExampleUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExampleUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExampleUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ExampleWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class ExampleWhereInput {
    @Field(() => [ExampleWhereInput], {nullable:true})
    AND?: Array<ExampleWhereInput>;
    @Field(() => [ExampleWhereInput], {nullable:true})
    OR?: Array<ExampleWhereInput>;
    @Field(() => [ExampleWhereInput], {nullable:true})
    NOT?: Array<ExampleWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Example {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

@ArgsType()
export class FindFirstExampleOrThrowArgs {
    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ExampleWhereInput>;
    @Field(() => [ExampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExampleOrderByWithRelationInput>;
    @Field(() => ExampleWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ExampleWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ExampleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ExampleScalarFieldEnum>;
}

@ArgsType()
export class FindFirstExampleArgs {
    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ExampleWhereInput>;
    @Field(() => [ExampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExampleOrderByWithRelationInput>;
    @Field(() => ExampleWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ExampleWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ExampleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ExampleScalarFieldEnum>;
}

@ArgsType()
export class FindManyExampleArgs {
    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ExampleWhereInput>;
    @Field(() => [ExampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExampleOrderByWithRelationInput>;
    @Field(() => ExampleWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ExampleWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ExampleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ExampleScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueExampleOrThrowArgs {
    @Field(() => ExampleWhereUniqueInput, {nullable:false})
    @Type(() => ExampleWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ExampleWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueExampleArgs {
    @Field(() => ExampleWhereUniqueInput, {nullable:false})
    @Type(() => ExampleWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ExampleWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyExampleArgs {
    @Field(() => ExampleUpdateManyMutationInput, {nullable:false})
    @Type(() => ExampleUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ExampleUpdateManyMutationInput>;
    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ExampleWhereInput>;
}

@ArgsType()
export class UpdateOneExampleArgs {
    @Field(() => ExampleUpdateInput, {nullable:false})
    @Type(() => ExampleUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ExampleUpdateInput>;
    @Field(() => ExampleWhereUniqueInput, {nullable:false})
    @Type(() => ExampleWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ExampleWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneExampleArgs {
    @Field(() => ExampleWhereUniqueInput, {nullable:false})
    @Type(() => ExampleWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ExampleWhereUniqueInput>;
    @Field(() => ExampleCreateInput, {nullable:false})
    @Type(() => ExampleCreateInput)
    create!: InstanceType<typeof ExampleCreateInput>;
    @Field(() => ExampleUpdateInput, {nullable:false})
    @Type(() => ExampleUpdateInput)
    update!: InstanceType<typeof ExampleUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolFilter, {nullable:true})
    not?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _min?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _max?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateSession {
    @Field(() => SessionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SessionCountAggregate>;
    @Field(() => SessionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SessionMinAggregate>;
    @Field(() => SessionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SessionMaxAggregate>;
}

@ArgsType()
export class CreateManySessionArgs {
    @Field(() => [SessionCreateManyInput], {nullable:false})
    @Type(() => SessionCreateManyInput)
    @ValidateNested()
    data!: Array<SessionCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSessionArgs {
    @Field(() => SessionCreateInput, {nullable:false})
    @Type(() => SessionCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof SessionCreateInput>;
}

@ArgsType()
export class DeleteManySessionArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
}

@ArgsType()
export class DeleteOneSessionArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof SessionWhereUniqueInput>;
}

@ArgsType()
export class FindFirstSessionOrThrowArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}

@ArgsType()
export class FindFirstSessionArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}

@ArgsType()
export class FindManySessionArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSessionOrThrowArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof SessionWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueSessionArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof SessionWhereUniqueInput>;
}

@ArgsType()
export class SessionAggregateArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SessionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SessionCountAggregateInput>;
    @Field(() => SessionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SessionMinAggregateInput>;
    @Field(() => SessionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SessionMaxAggregateInput>;
}

@InputType()
export class SessionCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    sessionToken?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SessionCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    sessionToken!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    expires!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SessionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class SessionCreateManyUserInputEnvelope {
    @Field(() => [SessionCreateManyUserInput], {nullable:false})
    @Type(() => SessionCreateManyUserInput)
    data!: Array<SessionCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SessionCreateManyUserInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class SessionCreateManyInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class SessionCreateNestedManyWithoutUserInput {
    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateWithoutUserInput)
    create?: Array<SessionCreateWithoutUserInput>;
    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<SessionWhereUniqueInput>;
}

@InputType()
export class SessionCreateOrConnectWithoutUserInput {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => SessionCreateWithoutUserInput, {nullable:false})
    @Type(() => SessionCreateWithoutUserInput)
    create!: InstanceType<typeof SessionCreateWithoutUserInput>;
}

@InputType()
export class SessionCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class SessionCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
    @Field(() => UserCreateNestedOneWithoutSessionInput, {nullable:false})
    User!: InstanceType<typeof UserCreateNestedOneWithoutSessionInput>;
}

@ArgsType()
export class SessionGroupByArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithAggregationInput>;
    @Field(() => [SessionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SessionScalarFieldEnum>;
    @Field(() => SessionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SessionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SessionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SessionCountAggregateInput>;
    @Field(() => SessionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SessionMinAggregateInput>;
    @Field(() => SessionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SessionMaxAggregateInput>;
}

@ObjectType()
export class SessionGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
    @Field(() => SessionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SessionCountAggregate>;
    @Field(() => SessionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SessionMinAggregate>;
    @Field(() => SessionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SessionMaxAggregate>;
}

@InputType()
export class SessionListRelationFilter {
    @Field(() => SessionWhereInput, {nullable:true})
    every?: InstanceType<typeof SessionWhereInput>;
    @Field(() => SessionWhereInput, {nullable:true})
    some?: InstanceType<typeof SessionWhereInput>;
    @Field(() => SessionWhereInput, {nullable:true})
    none?: InstanceType<typeof SessionWhereInput>;
}

@InputType()
export class SessionMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    sessionToken?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class SessionMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class SessionMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    sessionToken?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class SessionMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class SessionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class SessionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => SessionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SessionCountOrderByAggregateInput>;
    @Field(() => SessionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SessionMaxOrderByAggregateInput>;
    @Field(() => SessionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SessionMinOrderByAggregateInput>;
}

@InputType()
export class SessionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class SessionScalarWhereWithAggregatesInput {
    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SessionScalarWhereWithAggregatesInput>;
    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SessionScalarWhereWithAggregatesInput>;
    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SessionScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sessionToken?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class SessionScalarWhereInput {
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    AND?: Array<SessionScalarWhereInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    OR?: Array<SessionScalarWhereInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    NOT?: Array<SessionScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    sessionToken?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class SessionUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateWithoutUserInput)
    create?: Array<SessionCreateWithoutUserInput>;
    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<SessionWhereUniqueInput>;
}

@InputType()
export class SessionUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class SessionUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class SessionUncheckedUpdateManyWithoutSessionInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateWithoutUserInput)
    create?: Array<SessionCreateWithoutUserInput>;
    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    @Field(() => [SessionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    set?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    disconnect?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    delete?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [SessionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SessionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    @Type(() => SessionScalarWhereInput)
    deleteMany?: Array<SessionScalarWhereInput>;
}

@InputType()
export class SessionUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUpdateManyWithWhereWithoutUserInput {
    @Field(() => SessionScalarWhereInput, {nullable:false})
    @Type(() => SessionScalarWhereInput)
    where!: InstanceType<typeof SessionScalarWhereInput>;
    @Field(() => SessionUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionUpdateManyMutationInput)
    data!: InstanceType<typeof SessionUpdateManyMutationInput>;
}

@InputType()
export class SessionUpdateManyWithoutUserNestedInput {
    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateWithoutUserInput)
    create?: Array<SessionCreateWithoutUserInput>;
    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    @Field(() => [SessionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    set?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    disconnect?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    delete?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [SessionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SessionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    @Type(() => SessionScalarWhereInput)
    deleteMany?: Array<SessionScalarWhereInput>;
}

@InputType()
export class SessionUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => SessionUpdateWithoutUserInput, {nullable:false})
    @Type(() => SessionUpdateWithoutUserInput)
    data!: InstanceType<typeof SessionUpdateWithoutUserInput>;
}

@InputType()
export class SessionUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutSessionNestedInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateOneRequiredWithoutSessionNestedInput>;
}

@InputType()
export class SessionUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => SessionUpdateWithoutUserInput, {nullable:false})
    @Type(() => SessionUpdateWithoutUserInput)
    update!: InstanceType<typeof SessionUpdateWithoutUserInput>;
    @Field(() => SessionCreateWithoutUserInput, {nullable:false})
    @Type(() => SessionCreateWithoutUserInput)
    create!: InstanceType<typeof SessionCreateWithoutUserInput>;
}

@InputType()
export class SessionWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
}

@InputType()
export class SessionWhereInput {
    @Field(() => [SessionWhereInput], {nullable:true})
    AND?: Array<SessionWhereInput>;
    @Field(() => [SessionWhereInput], {nullable:true})
    OR?: Array<SessionWhereInput>;
    @Field(() => [SessionWhereInput], {nullable:true})
    NOT?: Array<SessionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    sessionToken?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Session {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date;
    @Field(() => User, {nullable:false})
    User?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManySessionArgs {
    @Field(() => SessionUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof SessionUpdateManyMutationInput>;
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
}

@ArgsType()
export class UpdateOneSessionArgs {
    @Field(() => SessionUpdateInput, {nullable:false})
    @Type(() => SessionUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof SessionUpdateInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof SessionWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneSessionArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => SessionCreateInput, {nullable:false})
    @Type(() => SessionCreateInput)
    create!: InstanceType<typeof SessionCreateInput>;
    @Field(() => SessionUpdateInput, {nullable:false})
    @Type(() => SessionUpdateInput)
    update!: InstanceType<typeof SessionUpdateInput>;
}

@ObjectType()
export class AggregateTodo {
    @Field(() => TodoCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TodoCountAggregate>;
    @Field(() => TodoMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TodoMinAggregate>;
    @Field(() => TodoMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TodoMaxAggregate>;
}

@ArgsType()
export class CreateManyTodoArgs {
    @Field(() => [TodoCreateManyInput], {nullable:false})
    @Type(() => TodoCreateManyInput)
    @ValidateNested()
    data!: Array<TodoCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTodoArgs {
    @Field(() => TodoCreateInput, {nullable:false})
    @Type(() => TodoCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof TodoCreateInput>;
}

@ArgsType()
export class DeleteManyTodoArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TodoWhereInput>;
}

@ArgsType()
export class DeleteOneTodoArgs {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof TodoWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTodoOrThrowArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TodoWhereInput>;
    @Field(() => [TodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithRelationInput>;
    @Field(() => TodoWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TodoWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TodoScalarFieldEnum>;
}

@ArgsType()
export class FindFirstTodoArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TodoWhereInput>;
    @Field(() => [TodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithRelationInput>;
    @Field(() => TodoWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TodoWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TodoScalarFieldEnum>;
}

@ArgsType()
export class FindManyTodoArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TodoWhereInput>;
    @Field(() => [TodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithRelationInput>;
    @Field(() => TodoWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TodoWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TodoScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTodoOrThrowArgs {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof TodoWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueTodoArgs {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof TodoWhereUniqueInput>;
}

@ArgsType()
export class TodoAggregateArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TodoWhereInput>;
    @Field(() => [TodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithRelationInput>;
    @Field(() => TodoWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TodoWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TodoCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TodoCountAggregateInput>;
    @Field(() => TodoMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TodoMinAggregateInput>;
    @Field(() => TodoMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TodoMaxAggregateInput>;
}

@InputType()
export class TodoCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    text?: true;
    @Field(() => Boolean, {nullable:true})
    completed?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TodoCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    text!: number;
    @Field(() => Int, {nullable:false})
    completed!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TodoCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TodoCreateManyUserInputEnvelope {
    @Field(() => [TodoCreateManyUserInput], {nullable:false})
    @Type(() => TodoCreateManyUserInput)
    data!: Array<TodoCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TodoCreateManyUserInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    text!: string;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@InputType()
export class TodoCreateManyInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    text!: string;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@InputType()
export class TodoCreateNestedManyWithoutUserInput {
    @Field(() => [TodoCreateWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateWithoutUserInput)
    create?: Array<TodoCreateWithoutUserInput>;
    @Field(() => [TodoCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutUserInput>;
    @Field(() => TodoCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TodoCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof TodoCreateManyUserInputEnvelope>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<TodoWhereUniqueInput>;
}

@InputType()
export class TodoCreateOrConnectWithoutUserInput {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: InstanceType<typeof TodoWhereUniqueInput>;
    @Field(() => TodoCreateWithoutUserInput, {nullable:false})
    @Type(() => TodoCreateWithoutUserInput)
    create!: InstanceType<typeof TodoCreateWithoutUserInput>;
}

@InputType()
export class TodoCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    text!: string;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@InputType()
export class TodoCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    text!: string;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCreateNestedOneWithoutTodoInput, {nullable:false})
    User!: InstanceType<typeof UserCreateNestedOneWithoutTodoInput>;
}

@ArgsType()
export class TodoGroupByArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TodoWhereInput>;
    @Field(() => [TodoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithAggregationInput>;
    @Field(() => [TodoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TodoScalarFieldEnum>;
    @Field(() => TodoScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TodoScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TodoCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TodoCountAggregateInput>;
    @Field(() => TodoMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TodoMinAggregateInput>;
    @Field(() => TodoMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TodoMaxAggregateInput>;
}

@ObjectType()
export class TodoGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    text!: string;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => TodoCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TodoCountAggregate>;
    @Field(() => TodoMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TodoMinAggregate>;
    @Field(() => TodoMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TodoMaxAggregate>;
}

@InputType()
export class TodoListRelationFilter {
    @Field(() => TodoWhereInput, {nullable:true})
    every?: InstanceType<typeof TodoWhereInput>;
    @Field(() => TodoWhereInput, {nullable:true})
    some?: InstanceType<typeof TodoWhereInput>;
    @Field(() => TodoWhereInput, {nullable:true})
    none?: InstanceType<typeof TodoWhereInput>;
}

@InputType()
export class TodoMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    text?: true;
    @Field(() => Boolean, {nullable:true})
    completed?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class TodoMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    text?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TodoMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TodoMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    text?: true;
    @Field(() => Boolean, {nullable:true})
    completed?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class TodoMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    text?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TodoMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TodoOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class TodoOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => TodoCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TodoCountOrderByAggregateInput>;
    @Field(() => TodoMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TodoMaxOrderByAggregateInput>;
    @Field(() => TodoMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TodoMinOrderByAggregateInput>;
}

@InputType()
export class TodoOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class TodoScalarWhereWithAggregatesInput {
    @Field(() => [TodoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TodoScalarWhereWithAggregatesInput>;
    @Field(() => [TodoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TodoScalarWhereWithAggregatesInput>;
    @Field(() => [TodoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TodoScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    completed?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class TodoScalarWhereInput {
    @Field(() => [TodoScalarWhereInput], {nullable:true})
    AND?: Array<TodoScalarWhereInput>;
    @Field(() => [TodoScalarWhereInput], {nullable:true})
    OR?: Array<TodoScalarWhereInput>;
    @Field(() => [TodoScalarWhereInput], {nullable:true})
    NOT?: Array<TodoScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    text?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    completed?: InstanceType<typeof BoolFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class TodoUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [TodoCreateWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateWithoutUserInput)
    create?: Array<TodoCreateWithoutUserInput>;
    @Field(() => [TodoCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutUserInput>;
    @Field(() => TodoCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TodoCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof TodoCreateManyUserInputEnvelope>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<TodoWhereUniqueInput>;
}

@InputType()
export class TodoUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    text!: string;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@InputType()
export class TodoUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    text!: string;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@InputType()
export class TodoUncheckedUpdateManyWithoutTodoInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    text?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TodoUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [TodoCreateWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateWithoutUserInput)
    create?: Array<TodoCreateWithoutUserInput>;
    @Field(() => [TodoCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutUserInput>;
    @Field(() => [TodoUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TodoUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<TodoUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => TodoCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TodoCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof TodoCreateManyUserInputEnvelope>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    set?: Array<TodoWhereUniqueInput>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    disconnect?: Array<TodoWhereUniqueInput>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    delete?: Array<TodoWhereUniqueInput>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<TodoWhereUniqueInput>;
    @Field(() => [TodoUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TodoUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<TodoUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [TodoUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => TodoUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<TodoUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [TodoScalarWhereInput], {nullable:true})
    @Type(() => TodoScalarWhereInput)
    deleteMany?: Array<TodoScalarWhereInput>;
}

@InputType()
export class TodoUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    text?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TodoUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    text?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TodoUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    text?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TodoUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    text?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TodoUpdateManyWithWhereWithoutUserInput {
    @Field(() => TodoScalarWhereInput, {nullable:false})
    @Type(() => TodoScalarWhereInput)
    where!: InstanceType<typeof TodoScalarWhereInput>;
    @Field(() => TodoUpdateManyMutationInput, {nullable:false})
    @Type(() => TodoUpdateManyMutationInput)
    data!: InstanceType<typeof TodoUpdateManyMutationInput>;
}

@InputType()
export class TodoUpdateManyWithoutUserNestedInput {
    @Field(() => [TodoCreateWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateWithoutUserInput)
    create?: Array<TodoCreateWithoutUserInput>;
    @Field(() => [TodoCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutUserInput>;
    @Field(() => [TodoUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TodoUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<TodoUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => TodoCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TodoCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof TodoCreateManyUserInputEnvelope>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    set?: Array<TodoWhereUniqueInput>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    disconnect?: Array<TodoWhereUniqueInput>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    delete?: Array<TodoWhereUniqueInput>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<TodoWhereUniqueInput>;
    @Field(() => [TodoUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TodoUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<TodoUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [TodoUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => TodoUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<TodoUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [TodoScalarWhereInput], {nullable:true})
    @Type(() => TodoScalarWhereInput)
    deleteMany?: Array<TodoScalarWhereInput>;
}

@InputType()
export class TodoUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: InstanceType<typeof TodoWhereUniqueInput>;
    @Field(() => TodoUpdateWithoutUserInput, {nullable:false})
    @Type(() => TodoUpdateWithoutUserInput)
    data!: InstanceType<typeof TodoUpdateWithoutUserInput>;
}

@InputType()
export class TodoUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    text?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TodoUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    text?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutTodoNestedInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateOneRequiredWithoutTodoNestedInput>;
}

@InputType()
export class TodoUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: InstanceType<typeof TodoWhereUniqueInput>;
    @Field(() => TodoUpdateWithoutUserInput, {nullable:false})
    @Type(() => TodoUpdateWithoutUserInput)
    update!: InstanceType<typeof TodoUpdateWithoutUserInput>;
    @Field(() => TodoCreateWithoutUserInput, {nullable:false})
    @Type(() => TodoCreateWithoutUserInput)
    create!: InstanceType<typeof TodoCreateWithoutUserInput>;
}

@InputType()
export class TodoWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class TodoWhereInput {
    @Field(() => [TodoWhereInput], {nullable:true})
    AND?: Array<TodoWhereInput>;
    @Field(() => [TodoWhereInput], {nullable:true})
    OR?: Array<TodoWhereInput>;
    @Field(() => [TodoWhereInput], {nullable:true})
    NOT?: Array<TodoWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    text?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    completed?: InstanceType<typeof BoolFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Todo {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    text!: string;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => User, {nullable:false})
    User?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManyTodoArgs {
    @Field(() => TodoUpdateManyMutationInput, {nullable:false})
    @Type(() => TodoUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof TodoUpdateManyMutationInput>;
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TodoWhereInput>;
}

@ArgsType()
export class UpdateOneTodoArgs {
    @Field(() => TodoUpdateInput, {nullable:false})
    @Type(() => TodoUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof TodoUpdateInput>;
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof TodoWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTodoArgs {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof TodoWhereUniqueInput>;
    @Field(() => TodoCreateInput, {nullable:false})
    @Type(() => TodoCreateInput)
    create!: InstanceType<typeof TodoCreateInput>;
    @Field(() => TodoUpdateInput, {nullable:false})
    @Type(() => TodoUpdateInput)
    update!: InstanceType<typeof TodoUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested()
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    emailVerified!: number;
    @Field(() => Int, {nullable:false})
    image!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    Account?: number;
    @Field(() => Int, {nullable:false})
    Session?: number;
    @Field(() => Int, {nullable:false})
    Todo?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
}

@InputType()
export class UserCreateNestedOneWithoutAccountInput {
    @Field(() => UserCreateWithoutAccountInput, {nullable:true})
    @Type(() => UserCreateWithoutAccountInput)
    create?: InstanceType<typeof UserCreateWithoutAccountInput>;
    @Field(() => UserCreateOrConnectWithoutAccountInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAccountInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAccountInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutSessionInput {
    @Field(() => UserCreateWithoutSessionInput, {nullable:true})
    @Type(() => UserCreateWithoutSessionInput)
    create?: InstanceType<typeof UserCreateWithoutSessionInput>;
    @Field(() => UserCreateOrConnectWithoutSessionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSessionInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSessionInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutTodoInput {
    @Field(() => UserCreateWithoutTodoInput, {nullable:true})
    @Type(() => UserCreateWithoutTodoInput)
    create?: InstanceType<typeof UserCreateWithoutTodoInput>;
    @Field(() => UserCreateOrConnectWithoutTodoInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTodoInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTodoInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutAccountInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutAccountInput, {nullable:false})
    @Type(() => UserCreateWithoutAccountInput)
    create!: InstanceType<typeof UserCreateWithoutAccountInput>;
}

@InputType()
export class UserCreateOrConnectWithoutSessionInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutSessionInput, {nullable:false})
    @Type(() => UserCreateWithoutSessionInput)
    create!: InstanceType<typeof UserCreateWithoutSessionInput>;
}

@InputType()
export class UserCreateOrConnectWithoutTodoInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutTodoInput, {nullable:false})
    @Type(() => UserCreateWithoutTodoInput)
    create!: InstanceType<typeof UserCreateWithoutTodoInput>;
}

@InputType()
export class UserCreateWithoutAccountInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => SessionCreateNestedManyWithoutUserInput, {nullable:true})
    Session?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    @Field(() => TodoCreateNestedManyWithoutUserInput, {nullable:true})
    Todo?: InstanceType<typeof TodoCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutSessionInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountCreateNestedManyWithoutUserInput, {nullable:true})
    Account?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    @Field(() => TodoCreateNestedManyWithoutUserInput, {nullable:true})
    Todo?: InstanceType<typeof TodoCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutTodoInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountCreateNestedManyWithoutUserInput, {nullable:true})
    Account?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    @Field(() => SessionCreateNestedManyWithoutUserInput, {nullable:true})
    Session?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountCreateNestedManyWithoutUserInput, {nullable:true})
    Account?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    @Field(() => SessionCreateNestedManyWithoutUserInput, {nullable:true})
    Session?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    @Field(() => TodoCreateNestedManyWithoutUserInput, {nullable:true})
    Todo?: InstanceType<typeof TodoCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => AccountOrderByRelationAggregateInput, {nullable:true})
    Account?: InstanceType<typeof AccountOrderByRelationAggregateInput>;
    @Field(() => SessionOrderByRelationAggregateInput, {nullable:true})
    Session?: InstanceType<typeof SessionOrderByRelationAggregateInput>;
    @Field(() => TodoOrderByRelationAggregateInput, {nullable:true})
    Todo?: InstanceType<typeof TodoOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    emailVerified?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutAccountInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Session?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => TodoUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Todo?: InstanceType<typeof TodoUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutSessionInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Account?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => TodoUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Todo?: InstanceType<typeof TodoUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutTodoInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Account?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Session?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Account?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Session?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => TodoUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Todo?: InstanceType<typeof TodoUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
}

@InputType()
export class UserUncheckedUpdateWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Session?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => TodoUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Todo?: InstanceType<typeof TodoUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutSessionInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Account?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => TodoUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Todo?: InstanceType<typeof TodoUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutTodoInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Account?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Session?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Account?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Session?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => TodoUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Todo?: InstanceType<typeof TodoUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
}

@InputType()
export class UserUpdateOneRequiredWithoutAccountNestedInput {
    @Field(() => UserCreateWithoutAccountInput, {nullable:true})
    @Type(() => UserCreateWithoutAccountInput)
    create?: InstanceType<typeof UserCreateWithoutAccountInput>;
    @Field(() => UserCreateOrConnectWithoutAccountInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAccountInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAccountInput>;
    @Field(() => UserUpsertWithoutAccountInput, {nullable:true})
    @Type(() => UserUpsertWithoutAccountInput)
    upsert?: InstanceType<typeof UserUpsertWithoutAccountInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutAccountInput, {nullable:true})
    @Type(() => UserUpdateWithoutAccountInput)
    update?: InstanceType<typeof UserUpdateWithoutAccountInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutSessionNestedInput {
    @Field(() => UserCreateWithoutSessionInput, {nullable:true})
    @Type(() => UserCreateWithoutSessionInput)
    create?: InstanceType<typeof UserCreateWithoutSessionInput>;
    @Field(() => UserCreateOrConnectWithoutSessionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSessionInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSessionInput>;
    @Field(() => UserUpsertWithoutSessionInput, {nullable:true})
    @Type(() => UserUpsertWithoutSessionInput)
    upsert?: InstanceType<typeof UserUpsertWithoutSessionInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutSessionInput, {nullable:true})
    @Type(() => UserUpdateWithoutSessionInput)
    update?: InstanceType<typeof UserUpdateWithoutSessionInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutTodoNestedInput {
    @Field(() => UserCreateWithoutTodoInput, {nullable:true})
    @Type(() => UserCreateWithoutTodoInput)
    create?: InstanceType<typeof UserCreateWithoutTodoInput>;
    @Field(() => UserCreateOrConnectWithoutTodoInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTodoInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTodoInput>;
    @Field(() => UserUpsertWithoutTodoInput, {nullable:true})
    @Type(() => UserUpsertWithoutTodoInput)
    upsert?: InstanceType<typeof UserUpsertWithoutTodoInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutTodoInput, {nullable:true})
    @Type(() => UserUpdateWithoutTodoInput)
    update?: InstanceType<typeof UserUpdateWithoutTodoInput>;
}

@InputType()
export class UserUpdateWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => SessionUpdateManyWithoutUserNestedInput, {nullable:true})
    Session?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    @Field(() => TodoUpdateManyWithoutUserNestedInput, {nullable:true})
    Todo?: InstanceType<typeof TodoUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutSessionInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUpdateManyWithoutUserNestedInput, {nullable:true})
    Account?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    @Field(() => TodoUpdateManyWithoutUserNestedInput, {nullable:true})
    Todo?: InstanceType<typeof TodoUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutTodoInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUpdateManyWithoutUserNestedInput, {nullable:true})
    Account?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    @Field(() => SessionUpdateManyWithoutUserNestedInput, {nullable:true})
    Session?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUpdateManyWithoutUserNestedInput, {nullable:true})
    Account?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    @Field(() => SessionUpdateManyWithoutUserNestedInput, {nullable:true})
    Session?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    @Field(() => TodoUpdateManyWithoutUserNestedInput, {nullable:true})
    Todo?: InstanceType<typeof TodoUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutAccountInput {
    @Field(() => UserUpdateWithoutAccountInput, {nullable:false})
    @Type(() => UserUpdateWithoutAccountInput)
    update!: InstanceType<typeof UserUpdateWithoutAccountInput>;
    @Field(() => UserCreateWithoutAccountInput, {nullable:false})
    @Type(() => UserCreateWithoutAccountInput)
    create!: InstanceType<typeof UserCreateWithoutAccountInput>;
}

@InputType()
export class UserUpsertWithoutSessionInput {
    @Field(() => UserUpdateWithoutSessionInput, {nullable:false})
    @Type(() => UserUpdateWithoutSessionInput)
    update!: InstanceType<typeof UserUpdateWithoutSessionInput>;
    @Field(() => UserCreateWithoutSessionInput, {nullable:false})
    @Type(() => UserCreateWithoutSessionInput)
    create!: InstanceType<typeof UserCreateWithoutSessionInput>;
}

@InputType()
export class UserUpsertWithoutTodoInput {
    @Field(() => UserUpdateWithoutTodoInput, {nullable:false})
    @Type(() => UserUpdateWithoutTodoInput)
    update!: InstanceType<typeof UserUpdateWithoutTodoInput>;
    @Field(() => UserCreateWithoutTodoInput, {nullable:false})
    @Type(() => UserCreateWithoutTodoInput)
    create!: InstanceType<typeof UserCreateWithoutTodoInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    emailVerified?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    image?: InstanceType<typeof StringFilter>;
    @Field(() => AccountListRelationFilter, {nullable:true})
    Account?: InstanceType<typeof AccountListRelationFilter>;
    @Field(() => SessionListRelationFilter, {nullable:true})
    Session?: InstanceType<typeof SessionListRelationFilter>;
    @Field(() => TodoListRelationFilter, {nullable:true})
    Todo?: InstanceType<typeof TodoListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @Field(() => String, {nullable:true})
    email!: string | null;
    @Field(() => Date, {nullable:true})
    emailVerified!: Date | null;
    @Field(() => String, {nullable:true})
    image!: string | null;
    @Field(() => [Account], {nullable:true})
    Account?: Array<Account>;
    @Field(() => [Session], {nullable:true})
    Session?: Array<Session>;
    @Field(() => [Todo], {nullable:true})
    Todo?: Array<Todo>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}

@ObjectType()
export class AggregateVerificationToken {
    @Field(() => VerificationTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregate>;
    @Field(() => VerificationTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregate>;
    @Field(() => VerificationTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregate>;
}

@ArgsType()
export class CreateManyVerificationTokenArgs {
    @Field(() => [VerificationTokenCreateManyInput], {nullable:false})
    @Type(() => VerificationTokenCreateManyInput)
    @ValidateNested()
    data!: Array<VerificationTokenCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneVerificationTokenArgs {
    @Field(() => VerificationTokenCreateInput, {nullable:false})
    @Type(() => VerificationTokenCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof VerificationTokenCreateInput>;
}

@ArgsType()
export class DeleteManyVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
}

@ArgsType()
export class DeleteOneVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof VerificationTokenWhereUniqueInput>;
}

@ArgsType()
export class FindFirstVerificationTokenOrThrowArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof VerificationTokenWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VerificationTokenScalarFieldEnum>;
}

@ArgsType()
export class FindFirstVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof VerificationTokenWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VerificationTokenScalarFieldEnum>;
}

@ArgsType()
export class FindManyVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof VerificationTokenWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VerificationTokenScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueVerificationTokenOrThrowArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof VerificationTokenWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof VerificationTokenWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyVerificationTokenArgs {
    @Field(() => VerificationTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => VerificationTokenUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof VerificationTokenUpdateManyMutationInput>;
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
}

@ArgsType()
export class UpdateOneVerificationTokenArgs {
    @Field(() => VerificationTokenUpdateInput, {nullable:false})
    @Type(() => VerificationTokenUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof VerificationTokenUpdateInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof VerificationTokenWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof VerificationTokenWhereUniqueInput>;
    @Field(() => VerificationTokenCreateInput, {nullable:false})
    @Type(() => VerificationTokenCreateInput)
    create!: InstanceType<typeof VerificationTokenCreateInput>;
    @Field(() => VerificationTokenUpdateInput, {nullable:false})
    @Type(() => VerificationTokenUpdateInput)
    update!: InstanceType<typeof VerificationTokenUpdateInput>;
}

@ArgsType()
export class VerificationTokenAggregateArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof VerificationTokenWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VerificationTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregateInput>;
    @Field(() => VerificationTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregateInput>;
    @Field(() => VerificationTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregateInput>;
}

@InputType()
export class VerificationTokenCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    identifier?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class VerificationTokenCountAggregate {
    @Field(() => Int, {nullable:false})
    identifier!: number;
    @Field(() => Int, {nullable:false})
    token!: number;
    @Field(() => Int, {nullable:false})
    expires!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class VerificationTokenCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenCreateManyInput {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class VerificationTokenCreateInput {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@ArgsType()
export class VerificationTokenGroupByArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithAggregationInput>;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VerificationTokenScalarFieldEnum>;
    @Field(() => VerificationTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VerificationTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregateInput>;
    @Field(() => VerificationTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregateInput>;
    @Field(() => VerificationTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregateInput>;
}

@ObjectType()
export class VerificationTokenGroupBy {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
    @Field(() => VerificationTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregate>;
    @Field(() => VerificationTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregate>;
    @Field(() => VerificationTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregate>;
}

@InputType()
export class VerificationTokenIdentifierTokenCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
}

@InputType()
export class VerificationTokenMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    identifier?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class VerificationTokenMaxAggregate {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    identifier?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class VerificationTokenMinAggregate {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => VerificationTokenCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountOrderByAggregateInput>;
    @Field(() => VerificationTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxOrderByAggregateInput>;
    @Field(() => VerificationTokenMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinOrderByAggregateInput>;
}

@InputType()
export class VerificationTokenOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenScalarWhereWithAggregatesInput {
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class VerificationTokenUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class VerificationTokenUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenUpdateInput {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenWhereUniqueInput {
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => VerificationTokenIdentifierTokenCompoundUniqueInput, {nullable:true})
    identifier_token?: InstanceType<typeof VerificationTokenIdentifierTokenCompoundUniqueInput>;
}

@InputType()
export class VerificationTokenWhereInput {
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    AND?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    OR?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    NOT?: Array<VerificationTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    identifier?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class VerificationToken {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date;
}
