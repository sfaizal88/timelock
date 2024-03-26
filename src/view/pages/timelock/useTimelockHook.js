/**
 * 
 * Timelock hook component
 * @author - NA 
 * @date - 26th March, 2024
 * 
 */
// GENERIC IMPORT
import ethers from 'ethers';

export default function useTimelockHook() {
    
    // GENERAT SALT
    const generateSalt = () => {
        const safeWalletAddress = "0x213f1763Af3544af059a5A9f947A3ee3A9BA1129";
        const timeLockAddress = "0xCf1d93875Dd3d44BDa51c898B99281D459256072";
        // Use solidityKeccak256 to hash the combination of addresses
        const salt = ethers.utils.solidityKeccak256(
            ["address", "address"],
            [safeWalletAddress, timeLockAddress]
        );
        return salt;
    }

    const prepareData = (recipient, val) => {
        // PREPARE DATA LOCAL VARIABLE
        const tokenAbiFragment = [
            "function transfer(address recipient, uint256 amount)"
        ];
        const tokenAddress = "0x10C381e7C2d38f2Fae482D1ba134A6EA57C2dF9D";
        const tokenContract = new ethers.Contract(tokenAddress, tokenAbiFragment);
        // const sender = "0x213f1763Af3544af059a5A9f947A3ee3A9BA1129";
        // const recipient = "0xa8adA09aA5beefAc2edb6BCE3FD5Fb1fAbF9af9A";
        //can also give amount in WEI or use Utils function
        // const val = "100"; // The amount you want to convert
        const decimals = 8; 
        const amount = ethers.utils.parseUnits(val, decimals); 
        // Encoding the transfer function data
        const data = tokenContract.interface.encodeFunctionData('transfer', [recipient, amount]);
        return data;
    }

    return {
        generateSalt,
        prepareData
    }
}