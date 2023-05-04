import { Command } from '@oclif/command'
import {CliUx} from '@oclif/core'
import { network } from '../../storage/networks'

export default class GetNetwork extends Command {
  static description = 'Get Current Chain'

  static aliases = ['network']

  async run() {
    CliUx.ux.log('Current Network:')
    CliUx.ux.styledJSON(network.network)
  }

  async catch(e: Error) {
    CliUx.ux.styledJSON(e)
  }
}
