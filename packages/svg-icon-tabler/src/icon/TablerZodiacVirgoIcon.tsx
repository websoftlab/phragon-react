import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacVirgoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacVirgoIcon = React.forwardRef<SVGSVGElement, TablerZodiacVirgoIconProps>(
	function TablerZodiacVirgoIcon(props, ref) {
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
				<path d="M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" />
				<path d="M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacVirgoIcon.displayName = "TablerZodiacVirgoIcon";
}
