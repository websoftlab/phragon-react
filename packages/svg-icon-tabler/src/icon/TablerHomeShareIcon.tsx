import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeShareIcon = React.forwardRef<SVGSVGElement, TablerHomeShareIconProps>(
	function TablerHomeShareIcon(props, ref) {
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
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127" />
				<path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" />
				<path d="M16 22l5 -5" />
				<path d="M21 21.5v-4.5h-4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeShareIcon.displayName = "TablerHomeShareIcon";
}
