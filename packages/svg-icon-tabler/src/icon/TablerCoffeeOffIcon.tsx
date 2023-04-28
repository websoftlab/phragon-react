import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCoffeeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCoffeeOffIcon = React.forwardRef<SVGSVGElement, TablerCoffeeOffIconProps>(
	function TablerCoffeeOffIcon(props, ref) {
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
				<path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.73 -.565 1.783 -.923 3 -.99" />
				<path d="M8 3c-.194 .14 -.364 .305 -.506 .49" />
				<path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
				<path d="M14 10h3v3m-.257 3.743a6 6 0 0 1 -5.743 4.257h-2a6 6 0 0 1 -6 -6v-5h7" />
				<path d="M20.116 16.124a3 3 0 0 0 -3.118 -4.953" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCoffeeOffIcon.displayName = "TablerCoffeeOffIcon";
}
