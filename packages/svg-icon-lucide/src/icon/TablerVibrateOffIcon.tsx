import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVibrateOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVibrateOffIcon = React.forwardRef<SVGSVGElement, TablerVibrateOffIconProps>(
	function TablerVibrateOffIcon(props, ref) {
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
				<path d="m2 8 2 2-2 2 2 2-2 2" />
				<path d="m22 8-2 2 2 2-2 2 2 2" />
				<path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
				<path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
				<path d="M2 2 L22 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVibrateOffIcon.displayName = "TablerVibrateOffIcon";
}
