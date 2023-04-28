import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMedicineSyrupIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMedicineSyrupIcon = React.forwardRef<SVGSVGElement, TablerMedicineSyrupIconProps>(
	function TablerMedicineSyrupIcon(props, ref) {
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
				<path d="M8 21h8a1 1 0 0 0 1 -1v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10a1 1 0 0 0 1 1z" />
				<path d="M10 14h4" />
				<path d="M12 12v4" />
				<path d="M10 7v-3a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMedicineSyrupIcon.displayName = "TablerMedicineSyrupIcon";
}
