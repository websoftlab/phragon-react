import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacScorpioIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacScorpioIcon = React.forwardRef<SVGSVGElement, TablerZodiacScorpioIconProps>(
	function TablerZodiacScorpioIcon(props, ref) {
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
				<path d="M3 4a2 2 0 0 1 2 2v9" />
				<path d="M5 6a2 2 0 0 1 4 0v9" />
				<path d="M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacScorpioIcon.displayName = "TablerZodiacScorpioIcon";
}
