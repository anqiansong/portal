---
title: goctl model
slug: /docs/tutorials/cli/model
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述

goctl model 为 goctl 提供的数据库模型代码生成指令，目前支持 MySQL、PostgreSQL、Mongo 的代码生成，MySQL 支持从 sql
文件和数据库连接两种方式生成，PostgreSQL 仅支持从数据库连接生成。

## goctl model 指令

```bash
$ goctl model  --help
Generate model code

Usage:
  goctl model [command]

Available Commands:
  mongo       Generate mongo model
  mysql       Generate mysql model
  pg          Generate postgresql model

Flags:
  -h, --help   help for model


Use "goctl model [command] --help" for more information about a command.
```

### goctl model mongo 指令

Mongo 的生成不同于 MySQL，MySQL 可以从 scheme_information 库中读取到一张表的信息（字段名称，数据类型，索引等）， 而 Mongo
是文档型数据库，我们暂时无法从 db 中读取某一条记录来实现字段信息获取，就算有也不一定是完整信息（某些字段可能是 omitempty
修饰，可有可无）， 这里采用 type 自己编写+代码生成方式实现。

```bash
$ goctl model mongo --help
Generate mongo model

Usage:
  goctl model mongo [flags]

Flags:
      --branch string   The branch of the remote repo, it does work with --remote
  -c, --cache           Generate code with cache [optional]
  -d, --dir string      The target dir
  -e, --easy            Generate code with auto generated CollectionName for easy declare [optional]
  -h, --help            help for mongo
      --home string     The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
      --remote string   The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                        The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
      --style string    The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]
  -t, --type strings    Specified model type name
```

| <img width={100}/> 参数字段 | <img width={150}/> 参数类型 | <img width={200}/> 是否必填 | <img width={200}/> 默认值 | <img width={800}/> 参数说明                                                            |
|-------------------------|-------------------------|-------------------------|------------------------|------------------------------------------------------------------------------------|
| branch                  | string                  | NO                      | 空字符串                   | 远程模板所在 git 分支名称，仅当 `remote` 有值时使用                                                  |
| cache                   | boolean                 | NO                      | `false`                | 是否生成带缓存的代码                                                                         |
| dir                     | string                  | NO                      | 当前工作目录                 | 代码输出目录                                                                             |
| easy                    | boolean                 | NO                      | `false`                | 是否暴露集合名称变量                                                                         |
| home                    | string                  | NO                      | `${HOME}/.goctl`       | 本地模板文件目录                                                                           |
| remote                  | string                  | NO                      | 空字符串                   | 远程模板所在 git 仓库地址，当此字段传值时，优先级高于 `home` 字段值                                           |
| style                   | string                  | NO                      | `gozero`               | 输出文件和目录的命名风格格式化符号，详情见<a href="/docs/tutorials/cli/style" target="_blank"> 文件风格</a> |
| type                    | []string                | YES                     | `nil`                  | 结构体类型名称                                                                            |

#### 使用示例

以下我们以生成一个 User 结构体为例。

示例 1： 生成带缓存的代码

```bash
# 进入用户 Home 目录
$ cd ~

# 创建 demo 目录
$ mkdir demo && cd demo

# 生成 mongo 代码
$ goctl model mongo --type User --dir cache --cache

# 查看目录结构
$ tree
.
└── cache
    ├── error.go
    ├── usermodel.go
    ├── usermodelgen.go
    └── usertypes.go

1 directory, 4 files

```

查看代码

<Tabs>
<TabItem value="error.go" label="error.go" default>

```go
package model

import (
    "errors"

    "github.com/zeromicro/go-zero/core/stores/mon"
)

var (
    ErrNotFound        = mon.ErrNotFound
    ErrInvalidObjectId = errors.New("invalid objectId")
)
```

</TabItem>
<TabItem value="usermodel.go" label="usermodel.go" default>

:::tip
用户自定义代码在这个文件编写
:::

```go
package model

import (
    "github.com/zeromicro/go-zero/core/stores/cache"
    "github.com/zeromicro/go-zero/core/stores/monc"
)

var _ UserModel = (*customUserModel)(nil)

type (
    // UserModel is an interface to be customized, add more methods here,
    // and implement the added methods in customUserModel.
    UserModel interface {
        userModel
    }

    customUserModel struct {
        *defaultUserModel
    }
)

// NewUserModel returns a model for the mongo.
func NewUserModel(url, db, collection string, c cache.CacheConf) UserModel {
    conn := monc.MustNewModel(url, db, collection, c)
    return &customUserModel{
        defaultUserModel: newDefaultUserModel(conn),
    }
}
```

</TabItem>

<TabItem value="usermodelgen.go" label="usermodelgen.go" default>

:::tip
此文件的头部带有 `DO NOT EDIT` 标识，因此不能修改此文件代码，代码重新生成会覆盖此文件。
:::

```go
// Code generated by goctl. DO NOT EDIT.
package model

import (
    "context"
    "time"

    "github.com/zeromicro/go-zero/core/stores/monc"
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/bson/primitive"
)

var prefixUserCacheKey = "cache:user:"

type userModel interface {
    Insert(ctx context.Context, data *User) error
    FindOne(ctx context.Context, id string) (*User, error)
    Update(ctx context.Context, data *User) error
    Delete(ctx context.Context, id string) error
}

type defaultUserModel struct {
    conn *monc.Model
}

func newDefaultUserModel(conn *monc.Model) *defaultUserModel {
    return &defaultUserModel{conn: conn}
}

func (m *defaultUserModel) Insert(ctx context.Context, data *User) error {
    if data.ID.IsZero() {
        data.ID = primitive.NewObjectID()
        data.CreateAt = time.Now()
        data.UpdateAt = time.Now()
    }

    key := prefixUserCacheKey + data.ID.Hex()
    _, err := m.conn.InsertOne(ctx, key, data)
    return err
}

func (m *defaultUserModel) FindOne(ctx context.Context, id string) (*User, error) {
    oid, err := primitive.ObjectIDFromHex(id)
    if err != nil {
        return nil, ErrInvalidObjectId
    }

    var data User
    key := prefixUserCacheKey + id
    err = m.conn.FindOne(ctx, key, &data, bson.M{"_id": oid})
    switch err {
    case nil:
        return &data, nil
    case monc.ErrNotFound:
        return nil, ErrNotFound
    default:
        return nil, err
    }
}

func (m *defaultUserModel) Update(ctx context.Context, data *User) error {
    data.UpdateAt = time.Now()
    key := prefixUserCacheKey + data.ID.Hex()
    _, err := m.conn.ReplaceOne(ctx, key, bson.M{"_id": data.ID}, data)
    return err
}

func (m *defaultUserModel) Delete(ctx context.Context, id string) error {
    oid, err := primitive.ObjectIDFromHex(id)
    if err != nil {
        return ErrInvalidObjectId
    }
    key := prefixUserCacheKey + id
    _, err = m.conn.DeleteOne(ctx, key, bson.M{"_id": oid})
    return err
}
```

</TabItem>

<TabItem value="usertypes.go" label="usertypes.go" default>

```go
package model

import (
    "time"

    "go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
    ID primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
    // TODO: Fill your own fields
    UpdateAt time.Time `bson:"updateAt,omitempty" json:"updateAt,omitempty"`
    CreateAt time.Time `bson:"createAt,omitempty" json:"createAt,omitempty"`
}
```

</TabItem>
</Tabs>

示例 2: 生成不带缓存的代码

```bash
# 进入用户 Home 目录
$ cd ~

# 创建 demo 目录
$ mkdir demo && cd demo

# 生成 mongo 代码
$ goctl model mongo --type User --dir nocache

# 查看目录结构
$ tree
.
└── nocache
    ├── error.go
    ├── usermodel.go
    ├── usermodelgen.go
    └── usertypes.go

1 directory, 4 files
```

查看代码

<Tabs>
<TabItem value="error.go" label="error.go" default>

```go
package model

import (
    "errors"

    "github.com/zeromicro/go-zero/core/stores/mon"
)

var (
    ErrNotFound        = mon.ErrNotFound
    ErrInvalidObjectId = errors.New("invalid objectId")
)
```

</TabItem>
<TabItem value="usermodel.go" label="usermodel.go" default>

:::tip
用户自定义代码在这个文件编写
:::

```go
package model

import "github.com/zeromicro/go-zero/core/stores/mon"

var _ UserModel = (*customUserModel)(nil)

type (
    // UserModel is an interface to be customized, add more methods here,
    // and implement the added methods in customUserModel.
    UserModel interface {
        userModel
    }

    customUserModel struct {
        *defaultUserModel
    }
)

// NewUserModel returns a model for the mongo.
func NewUserModel(url, db, collection string) UserModel {
    conn := mon.MustNewModel(url, db, collection)
    return &customUserModel{
        defaultUserModel: newDefaultUserModel(conn),
    }
}
```

</TabItem>

<TabItem value="usermodelgen.go" label="usermodelgen.go" default>

:::tip
此文件的头部带有 `DO NOT EDIT` 标识，因此不能修改此文件代码，代码重新生成会覆盖此文件。
:::

```go
// Code generated by goctl. DO NOT EDIT.
package model

import (
    "context"
    "time"

    "github.com/zeromicro/go-zero/core/stores/mon"
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/bson/primitive"
)

type userModel interface {
    Insert(ctx context.Context, data *User) error
    FindOne(ctx context.Context, id string) (*User, error)
    Update(ctx context.Context, data *User) error
    Delete(ctx context.Context, id string) error
}

type defaultUserModel struct {
    conn *mon.Model
}

func newDefaultUserModel(conn *mon.Model) *defaultUserModel {
    return &defaultUserModel{conn: conn}
}

func (m *defaultUserModel) Insert(ctx context.Context, data *User) error {
    if data.ID.IsZero() {
        data.ID = primitive.NewObjectID()
        data.CreateAt = time.Now()
        data.UpdateAt = time.Now()
    }

    _, err := m.conn.InsertOne(ctx, data)
    return err
}

func (m *defaultUserModel) FindOne(ctx context.Context, id string) (*User, error) {
    oid, err := primitive.ObjectIDFromHex(id)
    if err != nil {
        return nil, ErrInvalidObjectId
    }

    var data User

    err = m.conn.FindOne(ctx, &data, bson.M{"_id": oid})
    switch err {
    case nil:
        return &data, nil
    case mon.ErrNotFound:
        return nil, ErrNotFound
    default:
        return nil, err
    }
}

func (m *defaultUserModel) Update(ctx context.Context, data *User) error {
    data.UpdateAt = time.Now()

    _, err := m.conn.ReplaceOne(ctx, bson.M{"_id": data.ID}, data)
    return err
}

func (m *defaultUserModel) Delete(ctx context.Context, id string) error {
    oid, err := primitive.ObjectIDFromHex(id)
    if err != nil {
        return ErrInvalidObjectId
    }

    _, err = m.conn.DeleteOne(ctx, bson.M{"_id": oid})
    return err
}
```

</TabItem>

<TabItem value="usertypes.go" label="usertypes.go" default>

```go
package model

import (
    "time"

    "go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
    ID primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
    // TODO: Fill your own fields
    UpdateAt time.Time `bson:"updateAt,omitempty" json:"updateAt,omitempty"`
    CreateAt time.Time `bson:"createAt,omitempty" json:"createAt,omitempty"`
}
```

</TabItem>
</Tabs>

#### 新增自定义 model 方法示例

在以上代码生成中可以看出，每张表生成都会有 4 个文件，其中 `xxmodel.go` 和 `xxmodelgen.go` 是 model 代码文件，待有 `gen.go`
文件后缀的
代码一般都会包含 `DO NOT EDIT` 标识，因此不能在这个文件中添加自定义代码，当用户需要新增或者修改代码时，可以在 `xxmodel.go`
中进行编辑，
在 `xxmodel.go` 中我们提供了 `customXXXModel` 结构体便于开发者进行扩展，这里接着上文生成的无缓存代码作为示例，我们给 user
表新增一个 List 方法。

1. 编辑 `usermodel.go` 文件
2. 在 `UserModel` 接口中新增方法 `List(ctx context.Context, page, limit int) ([]*User, error)`
3. 实现 `customUserModel`

最终代码如下，灰色底纹部分为新增自定义新增内容

```go {4,16,24-29}
package nocache

import (
	"context"
	"fmt"
	"github.com/zeromicro/go-zero/core/stores/sqlx"
)

var _ UserModel = (*customUserModel)(nil)

type (
	// UserModel is an interface to be customized, add more methods here,
	// and implement the added methods in customUserModel.
	UserModel interface {
		userModel
		List(ctx context.Context, page, limit int) ([]*User, error)
	}

	customUserModel struct {
		*defaultUserModel
	}
)

func (c *customUserModel) List(ctx context.Context, page, limit int) ([]*User, error) {
	query := fmt.Sprintf("select %s from %s limit ?,?", userRows, c.table)
	var resp []*User
	err := c.conn.QueryRowsCtx(ctx, &resp, query, (page-1)*limit, limit)
	return resp, err
}

// NewUserModel returns a model for the database table.
func NewUserModel(conn sqlx.SqlConn) UserModel {
	return &customUserModel{
		defaultUserModel: newUserModel(conn),
	}
}

```

#### 忽略字段控制

在 goctl 代码生成逻辑中，生成后的代码会在执行插入或者更新操作时会忽略某些字段的赋值，如 `create_time`，`Update_time` 等，目前
goctl 默认内置了 `create_at`, `create_time`, `created_at`, `update_at`, `update_time`, `updated_at`) 字段，在某些场景下
开发者可能不需要忽略，或者忽略的字段名称不为这些，开发者可以通过 `--ignore-columns (-i)`
进行控制，当 `--ignore-columns (-i)` 传值为空时
则跳过对 column 进行忽略，如果需要指定某些字段，则传具体值即可。

- 示例 1：跳过 column 忽略

```shell
# 必须显示传值为空字符串
$ goctl model mysql ddl -src="./sql/*.sql" -dir="./sql/model/ignore_columns/cache"  -i '' 
```

```go {6}
...
var (
	studentFieldNames          = builder.RawFieldNames(&Student{})
	studentRows                = strings.Join(studentFieldNames, ",")
	studentRowsExpectAutoSet   = strings.Join(stringx.Remove(studentFieldNames), ",")
	studentRowsWithPlaceHolder = strings.Join(stringx.Remove(studentFieldNames, "`type`"), "=?,") + "=?"
)
...
```

- 示例 2：指定某些 column 忽略

```go {6}
...
var (
	studentFieldNames          = builder.RawFieldNames(&Student{})
	studentRows                = strings.Join(studentFieldNames, ",")
	studentRowsExpectAutoSet   = strings.Join(stringx.Remove(studentFieldNames, "`column1`", "`column2`"), ",")
	studentRowsWithPlaceHolder = strings.Join(stringx.Remove(studentFieldNames, "`type`", "`column1`", "`column2`"), "=?,") + "=?"
)
...
```

```shell
# --ignore-columns 支持通过英文逗号分割的字符串来传多个值，也支持指定多个参数来传多个只
$ goctl model mysql ddl -src="./sql/*.sql" -dir="./sql/model/ignore_columns/cache"  -i 'column1,column2'
# 以上 shell 等同于
$ goctl model mysql ddl -src="./sql/*.sql" -dir="./sql/model/ignore_columns/cache"  -i 'column1' -i "column2"
```

### goctl model mysql 指令

goctl model mysql 指令用于生成基于 MySQL 的 model 代码，支持生成带缓存和不带缓存的代码。MySQL 代码生成支持从 sql
文件，数据库连接两个来源生成代码。

```bash
$ goctl model mysql --help
Generate mysql model

Usage:
  goctl model mysql [command]

Available Commands:
  datasource  Generate model from datasource
  ddl         Generate mysql model from ddl

Flags:
  -h, --help                     help for mysql
  -i, --ignore-columns strings   Ignore columns while creating or updating rows (default [create_at,created_at,create_time,update_at,updated_at,update_time])
      --strict                   Generate model in strict mode
      -p, --prefix string            The cache prefix, effective when --cache is true (default "cache")


Use "goctl model mysql [command] --help" for more information about a command.
```

#### goctl model mysql datasource 指令

goctl model mysql datasource 指令用于从数据库连接生成 model 代码。

```bash
$ goctl model mysql datasource --help
Generate model from datasource

Usage:
  goctl model mysql datasource [flags]

Flags:
      --branch string   The branch of the remote repo, it does work with --remote
  -c, --cache           Generate code with cache [optional]
  -d, --dir string      The target dir
  -h, --help            help for datasource
      --home string     The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
      --idea            For idea plugin [optional]
      --remote string   The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                        The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
      --style string    The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]
  -t, --table strings   The table or table globbing patterns in the database
      --url string      The data source of database,like "root:password@tcp(127.0.0.1:3306)/database"


Global Flags:
  -i, --ignore-columns strings   Ignore columns while creating or updating rows (default [create_at,created_at,create_time,update_at,updated_at,update_time])
      --strict                   Generate model in strict mode
      -p, --prefix string            The cache prefix, effective when --cache is true (default "cache")
```

| <img width={100}/> 参数字段 | <img width={150}/> 参数类型 | <img width={200}/> 是否必填 | <img width={200}/> 默认值 | <img width={800}/> 参数说明                                                                                                                                                     |
|-------------------------|-----------------------|-------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| branch                  | string                | NO                      | 空字符串                   | 远程模板所在 git 分支名称，仅当 `remote` 有值时使用                                                                                                                                           |
| cache                   | boolean               | NO                      | `false`                | 是否生成带缓存的代码                                                                                                                                                                  |
| dir                     | string                | NO                      | 当前工作目录                 | 代码输出目录                                                                                                                                                                      |
| easy                    | boolean               | NO                      | `false`                | 是否暴露集合名称变量                                                                                                                                                                  |
| home                    | string                | NO                      | `${HOME}/.goctl`       | 本地模板文件目录                                                                                                                                                                    |
| remote                  | string                | NO                      | 空字符串                   | 远程模板所在 git 仓库地址，当此字段传值时，优先级高于 `home` 字段值                                                                                                                                    |
| style                   | string                | NO                      | `gozero`               | 输出文件和目录的命名风格格式化符号，详情见<a href="/docs/tutorials/cli/style" target="_blank"> 文件风格</a>                                                                                          |
| table                   | []string              | YES                     | `nil`                  | 需要生成代码的表                                                                                                                                                                    |
| url                     | string                | YES                     | 空字符串                   | 数据库连接，格式{{username}}:{{password}}@tcp({{host_port}})/{{db}}                                                                                                                 |
| ignore-columns          | []string              | NO                      | `nil`                  | 需要忽略的字段，插入或者更新时需要忽略的字段，如 `create_time`                                                                                                                                      |
| prefix                  | string                | NO                      | `cache`                | 自定义缓存 key 前缀，默认为 `cache`,goctl 版本需要大于 1.7.6                                                                                                                                 |
| strict                  | boolean               | NO                      | `false`                | 是否是严格模式，如果是严格模式下，会对 `unsigned` 修饰的字段转换为对应的数据类型，主要针对数值型，例如：如果数据库中列为 `bigint` 类型，如果为`unsigned` 修饰则对应的 golang 数据类型就为 `int64`，否则为 `uint64`，如果 strict 为 false，则不关注 `unsigned` 修饰 |

#### goctl model mysql ddl 指令

goctl model mysql ddl 指令用于从 sql 文件生成 model 代码。

```bash
$ goctl model mysql ddl --help
Generate mysql model from ddl

Usage:
  goctl model mysql ddl [flags]

Flags:
      --branch string     The branch of the remote repo, it does work with --remote
  -c, --cache             Generate code with cache [optional]
      --database string   The name of database [optional]
  -d, --dir string        The target dir
  -h, --help              help for ddl
      --home string       The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
      --idea              For idea plugin [optional]
      --remote string     The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                          The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
  -s, --src string        The path or path globbing patterns of the ddl
      --style string      The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]


Global Flags:
  -i, --ignore-columns strings   Ignore columns while creating or updating rows (default [create_at,created_at,create_time,update_at,updated_at,update_time])
      --strict                   Generate model in strict mode
      -p, --prefix string            The cache prefix, effective when --cache is true (default "cache")
```

| <img width={100}/> 参数字段 | <img width={150}/> 参数类型 | <img width={200}/> 是否必填 | <img width={200}/> 默认值 | <img width={800}/> 参数说明                                                                                                                                                     |
|-------------------------|-------------------------|-------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| branch                  | string                  | NO                      | 空字符串                   | 远程模板所在 git 分支名称，仅当 `remote` 有值时使用                                                                                                                                           |
| cache                   | boolean                 | NO                      | `false`                | 是否生成带缓存的代码                                                                                                                                                                  |
| dir                     | string                  | NO                      | 当前工作目录                 | 代码输出目录                                                                                                                                                                      |
| easy                    | boolean                 | NO                      | `false`                | 是否暴露集合名称变量                                                                                                                                                                  |
| home                    | string                  | NO                      | `${HOME}/.goctl`       | 本地模板文件目录                                                                                                                                                                    |
| remote                  | string                  | NO                      | 空字符串                   | 远程模板所在 git 仓库地址，当此字段传值时，优先级高于 `home` 字段值                                                                                                                                    |
| src                     | string                  | YES                     | 空字符串                   | sql 文件路径                                                                                                                                                                    |
| style                   | string                  | NO                      | `gozero`               | 输出文件和目录的命名风格格式化符号，详情见<a href="/docs/tutorials/cli/style" target="_blank"> 文件风格</a>                                                                                          |
| ignore-columns          | []string                | NO                      | `nil`                  | 需要忽略的字段，插入或者更新时需要忽略的字段，如 `create_time`                                                                                                                                      |
| strict                  | boolean                 | NO                      | `false`                | 是否是严格模式，如果是严格模式下，会对 `unsigned` 修饰的字段转换为对应的数据类型，主要针对数值型，例如：如果数据库中列为 `bigint` 类型，如果为`unsigned` 修饰则对应的 golang 数据类型就为 `int64`，否则为 `uint64`，如果 strict 为 false，则不关注 `unsigned` 修饰 |
| prefix                  | string                  | NO                      | `cache`                | 自定义缓存 key 前缀，默认为 `cache`, goctl 版本需要大于 1.7.6                                                                                                                                |

#### MySQL 类型映射关系(稳定版本)

<Tabs>

<TabItem value="strict model" label="strict 为 true 时，且 unsigned 修饰" default>

| <img width={100}/> MySQL 类型 | <img width={200}/> 是否为 null 约束 | <img width={400}/> Golang 类型 |
|-----------------------------|--------------------------------|------------------------------|
| bit                         | NO                             | byte                         |
| tinyint                     | NO                             | uint64                       |
| tinyint                     | YES                            | sql.NullInt64                |
| smallint                    | NO                             | uint64                       |
| smallint                    | YES                            | sql.NullInt64                |
| mediumint                   | NO                             | uint64                       |
| mediumint                   | YES                            | sql.NullInt64                |
| int                         | NO                             | uint64                       |
| int                         | YES                            | sql.NullInt64                |
| middleint                   | NO                             | uint64                       |
| middleint                   | YES                            | sql.NullInt64                |
| int1                        | NO                             | uint64                       |
| int1                        | YES                            | sql.NullInt64                |
| int2                        | NO                             | uint64                       |
| int2                        | YES                            | sql.NullInt64                |
| int3                        | NO                             | uint64                       |
| int3                        | YES                            | sql.NullInt64                |
| int4                        | NO                             | uint64                       |
| int4                        | YES                            | sql.NullInt64                |
| int8                        | NO                             | iunt64                       |
| int8                        | YES                            | sql.NullInt64                |
| integer                     | NO                             | uint64                       |
| integer                     | YES                            | sql.NullInt64                |
| bigint                      | NO                             | uint64                       |
| bigint                      | YES                            | sql.NullInt64                |
| float                       | NO                             | float64                      |
| float                       | YES                            | sql.NullFloat64              |
| float4                      | NO                             | float64                      |
| float4                      | YES                            | sql.NullFloat64              |
| float8                      | NO                             | float64                      |
| float8                      | YES                            | sql.NullFloat64              |
| date                        | NO                             | time.Time                    |
| datetime                    | NO                             | time.Time                    |
| timstamp                    | NO                             | time.Time                    |
| time                        | NO                             | string                       |
| year                        | NO                             | int64                        |
| char                        | NO                             | string                       |
| varchar                     | NO                             | string                       |
| nvarchar                    | NO                             | string                       |
| nchar                       | NO                             | string                       |
| character                   | NO                             | string                       |
| longvarchar                 | NO                             | string                       |
| linestring                  | NO                             | string                       |
| multilinestring             | NO                             | string                       |
| binary                      | NO                             | string                       |
| varbinary                   | NO                             | string                       |
| tinytext                    | NO                             | string                       |
| text                        | NO                             | string                       |
| mediumtext                  | NO                             | string                       |
| longtext                    | NO                             | string                       |
| enum                        | NO                             | string                       |
| set                         | NO                             | string                       |
| json                        | NO                             | string                       |
| blob                        | NO                             | string                       |
| longblob                    | NO                             | string                       |
| mediumblob                  | NO                             | string                       |
| tinyblob                    | NO                             | string                       |
| bool                        | NO                             | bool                         |
| bllean                      | NO                             | bool                         |

</TabItem>

<TabItem value="no strict model" label="strict 不为 true 时" default>

| <img width={100}/> MySQL 类型 | <img width={200}/> 是否为 null 约束 | <img width={400}/> Golang 类型 |
|-----------------------------|--------------------------------|------------------------------|
| bit                         | NO                             | byte                         |
| tinyint                     | NO                             | int64                        |
| tinyint                     | YES                            | sql.NullInt64                |
| smallint                    | NO                             | int64                        |
| smallint                    | YES                            | sql.NullInt64                |
| mediumint                   | NO                             | int64                        |
| mediumint                   | YES                            | sql.NullInt64                |
| int                         | NO                             | int64                        |
| int                         | YES                            | sql.NullInt64                |
| middleint                   | NO                             | int64                        |
| middleint                   | YES                            | sql.NullInt64                |
| int1                        | NO                             | int64                        |
| int1                        | YES                            | sql.NullInt64                |
| int2                        | NO                             | int64                        |
| int2                        | YES                            | sql.NullInt64                |
| int3                        | NO                             | int64                        |
| int3                        | YES                            | sql.NullInt64                |
| int4                        | NO                             | int64                        |
| int4                        | YES                            | sql.NullInt64                |
| int8                        | NO                             | int64                        |
| int8                        | YES                            | sql.NullInt64                |
| integer                     | NO                             | int64                        |
| integer                     | YES                            | sql.NullInt64                |
| bigint                      | NO                             | int64                        |
| bigint                      | YES                            | sql.NullInt64                |
| float                       | NO                             | float64                      |
| float                       | YES                            | sql.NullFloat64              |
| float4                      | NO                             | float64                      |
| float4                      | YES                            | sql.NullFloat64              |
| float8                      | NO                             | float64                      |
| float8                      | YES                            | sql.NullFloat64              |
| date                        | NO                             | time.Time                    |
| datetime                    | NO                             | time.Time                    |
| timstamp                    | NO                             | time.Time                    |
| time                        | NO                             | string                       |
| year                        | NO                             | int64                        |
| char                        | NO                             | string                       |
| varchar                     | NO                             | string                       |
| nvarchar                    | NO                             | string                       |
| nchar                       | NO                             | string                       |
| character                   | NO                             | string                       |
| longvarchar                 | NO                             | string                       |
| linestring                  | NO                             | string                       |
| multilinestring             | NO                             | string                       |
| binary                      | NO                             | string                       |
| varbinary                   | NO                             | string                       |
| tinytext                    | NO                             | string                       |
| text                        | NO                             | string                       |
| mediumtext                  | NO                             | string                       |
| longtext                    | NO                             | string                       |
| enum                        | NO                             | string                       |
| set                         | NO                             | string                       |
| json                        | NO                             | string                       |
| blob                        | NO                             | string                       |
| longblob                    | NO                             | string                       |
| mediumblob                  | NO                             | string                       |
| tinyblob                    | NO                             | string                       |
| bool                        | NO                             | bool                         |
| bllean                      | NO                             | bool                         |

</TabItem>

</Tabs>

### goctl model pg 指令

goctl model pg 指令用于从 PostgreSQL 数据库中生成 Go 语言代码。

```bash
$ goctl model pg --help
Generate postgresql model

Usage:
  goctl model pg [flags]
  goctl model pg [command]

Available Commands:
  datasource  Generate model from datasource

Flags:
  -h, --help   help for pg


Use "goctl model pg [command] --help" for more information about a command.
```

#### goctl model pg datasource 指令

```bash
$ goctl model pg datasource --help
Generate model from datasource

Usage:
  goctl model pg datasource [flags]

Flags:
      --branch string   The branch of the remote repo, it does work with --remote
  -c, --cache           Generate code with cache [optional]
  -d, --dir string      The target dir
  -h, --help            help for datasource
      --home string     The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
      --idea            For idea plugin [optional]
      --remote string   The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                        	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
  -s, --schema string   The table schema (default "public")
      --strict          Generate model in strict mode
      --style string    The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]
  -t, --table string    The table or table globbing patterns in the database
      --url string      The data source of database,like "postgres://root:password@127.0.0.1:5432/database?sslmode=disable"
```

| <img width={100}/> 参数字段 | <img width={150}/> 参数类型 | <img width={200}/> 是否必填 | <img width={200}/> 默认值 | <img width={800}/> 参数说明                                                                                                                                                     |
|-------------------------|-------------------------|-------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| branch                  | string                  | NO                      | 空字符串                   | 远程模板所在 git 分支名称，仅当 `remote` 有值时使用                                                                                                                                           |
| cache                   | boolean                 | NO                      | `false`                | 是否生成带缓存的代码                                                                                                                                                                  |
| dir                     | string                  | NO                      | 当前工作目录                 | 代码输出目录                                                                                                                                                                      |
| easy                    | boolean                 | NO                      | `false`                | 是否暴露集合名称变量                                                                                                                                                                  |
| home                    | string                  | NO                      | `${HOME}/.goctl`       | 本地模板文件目录                                                                                                                                                                    |
| idea                    | boolean                 | NO                      | `false`                | 是否为 idea 使用，终端请忽略此字段                                                                                                                                                        |
| remote                  | string                  | NO                      | 空字符串                   | 远程模板所在 git 仓库地址，当此字段传值时，优先级高于 `home` 字段值                                                                                                                                    |
| strict                  | boolean                 | NO                      | `false`                | 是否是严格模式，如果是严格模式下，会对 `unsigned` 修饰的字段转换为对应的数据类型，主要针对数值型，例如：如果数据库中列为 `bigint` 类型，如果为`unsigned` 修饰则对应的 golang 数据类型就为 `int64`，否则为 `uint64`，如果 strict 为 false，则不关注 `unsigned` 修饰 |
| style                   | string                  | NO                      | `gozero`               | 输出文件和目录的命名风格格式化符号，详情见<a href="/docs/tutorials/cli/style" target="_blank"> 文件风格</a>                                                                                          |
| table                   | []string                | YES                     | `nil`                  | 需要生成代码的表                                                                                                                                                                    |
| url                     | string                  | YES                     | 空字符串                   | 数据库连接，格式 postgres://{{username}}:{{password}}@{{host_port}}/{{db}}?sslmode=disable                                                                                          |

#### PostgreSQL 类型映射关系

| <img width={100}/> PostgreSQL 类型 | <img width={800}/> Golang 类型 |
|----------------------------------|------------------------------|
| bool                             | bool                         |
| _bool                            | pq.BoolArray                 |
| boolean                          | bool                         |
| tinyint                          | int64                        |
| smallint                         | int64                        |
| mediumint                        | int64                        |
| int                              | int64                        |
| int1                             | int64                        |
| int2                             | int64                        |
| _int2                            | pq.Int64Array                |
| int3                             | int64                        |
| int4                             | int64                        |
| _int4                            | pq.Int64Array                |
| int8                             | int64                        |
| _int8                            | pq.Int64Array                |
| integer                          | int64                        |
| _integer                         | pq.Int64Array                |
| bigint                           | int64                        |
| float                            | float64                      |
| float4                           | float64                      |
| _float4                          | pq.Float64Array              |
| float8                           | float64                      |
| _float8                          | pq.Float64Array              |
| double                           | float64                      |
| decimal                          | float64                      |
| dec                              | float64                      |
| fixed                            | float64                      |
| real                             | float64                      |
| bit                              | byte                         |
| date                             | time.Time                    |
| datetime                         | time.Time                    |
| timestamp                        | time.Time                    |
| time                             | string                       |
| year                             | int64                        |
| linestring                       | string                       |
| multilinestring                  | string                       |
| nvarchar                         | string                       |
| nchar                            | string                       |
| char                             | string                       |
| _char                            | pq.StringArray               |
| character                        | string                       |
| varchar                          | string                       |
| _varchar                         | pq.StringArray               |
| binary                           | string                       |
| bytea                            | string                       |
| longvarbinary                    | string                       |
| varbinary                        | string                       |
| tinytext                         | string                       |
| text                             | string                       |
| _text                            | pq.StringArray               |
| mediumtext                       | string                       |
| longtext                         | string                       |
| enum                             | string                       |
| set                              | string                       |
| json                             | string                       |
| jsonb                            | string                       |
| blob                             | string                       |
| longblob                         | string                       |
| mediumblob                       | string                       |
| tinyblob                         | string                       |
| ltree                            | []byte                       |

### 类型映射自定义

类型映射自定义只有试验版本才能使用，关于如何开启试验版本，请参考 <a href="docs/tutorials/cli/env" target="_blank">goctl
env</a>，关于配置使用请参考 <a href="docs/tutorials/cli/config" target="_blank">goctl config</a>

示例 1. 修改 decimal 为 decimal.Decimal 类型

1. 在需要生成 model 的工程中初始化配置

```bash
$ goctl config init
goctl.yaml generated in ~/workspace/go-zero/tools/goctl/goctl.yaml
```

2. 修改类型映射关系

灰色底纹部分为自定义映射类型。

```yaml {10-13}
model:
  types_map:
    bigint:
      null_type: sql.NullInt64
      type: int64
      unsigned_type: uint64
    dec:
      null_type: sql.NullFloat64
      type: float64
    decimal:
      null_type: decimal.NullDecimal
      pkg: github.com/shopspring/decimal
      type: decimal.Decimal
    ...
```

### 添加 goctl 内置不支持的类型映射

我们在表中有一个 pg 的数据类型为 inet

```SQL
-- auto-generated definition
create table student
(
    id          integer                               not null
        constraint student_pk
            primary key,
    name        varchar default ''::character varying not null,
    age         integer default 0                     not null,
    description integer                               not null,
    ip_address  inet    default '0.0.0.0'::inet       not null
);

alter table student
    owner to postgres;

```

目前 goctl 内置类型映射不支持的类型，因此 goctl 会报错如下：

```bash
$ goctl model pg datasource --url="postgres://postgres:postgrespw@127.0.0.1:55000/postgres?sslmode=disable" --table="user,student" --dir . 
Error: unsupported database type: inet
```

要解决如上问题，在以往 goctl 版本是不支持的，只能给内置类型映射规则添加规则，然后再发版本，但是现在只需要在配置文件中添加一条类型映射规则皆可。

> 前提要 goctl 版本大于等于 1.6.5，且开始实验性功能

1. 查看 goctl 版本是否满足条件

```bash
$ goctl env
GOCTL_OS=darwin
GOCTL_ARCH=arm64
GOCTL_HOME=/Users/sh00414ml/.goctl
GOCTL_DEBUG=False
GOCTL_CACHE=/Users/sh00414ml/.goctl/cache
GOCTL_EXPERIMENTAL=on # 实验性功能管开如果为 off 则需要开启，开启命令为 goctl env -w GOCTL_EXPERIMENTAL=on
GOCTL_VERSION=1.6.5 # goctl 版本
PROTOC_VERSION=3.19.4
PROTOC_GEN_GO_VERSION=v1.28.0
PROTO_GEN_GO_GRPC_VERSION=1.2.0
```

2. 在目标工程项目中初始化 goctl 配置

```bash
$ goctl config
goctl.yaml generated in ~/demo/goctl-config/goctl.yaml # 这里以自己电脑输出准，这里仅供参考
```

3. 修改 goctl.yaml

增加目标数据类型及映射关系，这里添加一个 inet 的映射，示例如下灰色底纹部分

```yaml {8-10}
model:
  types_map:
    bigint:
      null_type: sql.NullInt64
      type: int64
      unsigned_type: uint64
    ...
    inet:
      null_type: sql.NullString
      type: string
```

4. 再次生成 model 代码

```bash
goctl model pg datasource --url="postgres://postgres:postgrespw@127.0.0.1:55000/postgres?sslmode=disable" --table="user,student" --dir . 
Done.
```


