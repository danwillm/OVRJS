{
  'variables': {
    'platform': '<(OS)',
  },
  'conditions': [
    ['platform == "mac"', {'variables': {'platform': 'darwin'}}],
    ['platform == "win"', {'variables': {'platform': 'win32'}}],
  ],
  'targets': [
    {
      'target_name': 'openvr',
      'defines': [
        'VERSION=1.23.7'
      ],
      'sources': [
        'src/napi_util.h',
        'src/bindings.cpp',
        'src/ivroverlay.cpp'
        ],
      'include_dirs': [
        "<!(node -p \"require('node-addon-api').include_dir\")",
        '<(module_root_dir)/lib/openvr/headers',
        '<(module_root_dir)/lib/glfw/include',
        '<(module_root_dir)/lib/sdl2-2.0.3/include'
      ],
      'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
      'cflags!': [ '-fno-exceptions' ],
      'cflags_cc!': [ '-fno-exceptions' ],
      'conditions': [
        ['OS=="linux"', {
          'library_dirs': ['<(module_root_dir)/lib/openvr/lib/linux64'],
          'libraries': ['<(module_root_dir)/lib/openvr/lib/linux64/libopenvr_api.so'],
          'copies':
          [
            {
              'destination': '<(module_root_dir)/build/Release',
              'files': ['<(module_root_dir)/lib/openvr/bin/linux64/libopenvr_api.so']
            }
          ],
        }],
        ['OS=="mac"', {
          'library_dirs': ['<(module_root_dir)/lib/openvr/lib/osx32'],
          'libraries': ['libopenvr_api.dylib'],
          'copies':
          [
            {
              'destination': '<(module_root_dir)/build/Release',
              'files': ['<(module_root_dir)/lib/openvr/bin/osx32/libopenvr_api.dylib']
            }
          ],
        }],
        ['OS=="win"', {
          'library_dirs': ['<(module_root_dir)/lib/openvr/lib/win64', '<(module_root_dir)/lib/glfw/lib-vc2022'],
          'libraries': ['openvr_api.lib', 'glfw3dll.lib', 'opengl32.lib'],
          'defines' : ['VC_EXTRALEAN', 'NOMINMAX', '_HAS_EXCEPTIONS=1'],
          "msvs_settings": {
            "VCCLCompilerTool": {
              "ExceptionHandling": 1
            },
          },
          'copies':
          [
            {
              'destination': '<(module_root_dir)/build/Release',
              'files': [
                '<(module_root_dir)/lib/openvr/bin/win64/openvr_api.dll',
                '<(module_root_dir)/lib/glfw/lib-vc2022/glfw3.dll',
              ]
            }
          ],
        }],
      ],
    }
  ]
}