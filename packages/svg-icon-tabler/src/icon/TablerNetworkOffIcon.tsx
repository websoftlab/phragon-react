import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNetworkOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNetworkOffIcon = React.forwardRef<SVGSVGElement, TablerNetworkOffIconProps>(
	function TablerNetworkOffIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M6.537 6.516a6 6 0 0 0 7.932 7.954m2.246 -1.76a6 6 0 0 0 -8.415 -8.433" />
				<path d="M12 3c1.333 .333 2 2.333 2 6c0 .348 0 .681 -.018 1m-.545 3.43c-.332 .89 -.811 1.414 -1.437 1.57" />
				<path d="M12 3c-.938 .234 -1.547 1.295 -1.825 3.182m-.156 3.837c.117 3.02 .777 4.68 1.981 4.981" />
				<path d="M6 9h3m4 0h5" />
				<path d="M3 19h7" />
				<path d="M14 19h5" />
				<path d="M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M12 15v2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNetworkOffIcon.displayName = "TablerNetworkOffIcon";
}
