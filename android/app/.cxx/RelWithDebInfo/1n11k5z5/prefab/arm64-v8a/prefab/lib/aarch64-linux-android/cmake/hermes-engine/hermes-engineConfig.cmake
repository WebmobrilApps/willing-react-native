if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/ravi/.gradle/caches/transforms-3/6a91749ab62888d8ed0167c594997d72/transformed/jetified-hermes-android-0.72.4-release/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/ravi/.gradle/caches/transforms-3/6a91749ab62888d8ed0167c594997d72/transformed/jetified-hermes-android-0.72.4-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

