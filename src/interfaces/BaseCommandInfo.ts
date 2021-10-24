export default interface IBaseCommandInfo {
    /**
     * The name of the command
     */
    name: string;
    /**
     * Any aliases the command might have
     */
    aliases?: Array<string>;
    /**
     * A short description of what the command does
     */
    description: string;
    /**
     * What category the command should be in
     */
    category: string;
} 