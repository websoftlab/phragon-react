import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoveVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoveVerticalIcon = React.forwardRef<SVGSVGElement, TablerMoveVerticalIconProps>(
	function TablerMoveVerticalIcon(props, ref) {
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
				<path d="M8 18 L12 22 L16 18" />
				<path d="M8 6 L12 2 L16 6" />
				<path d="M12 2 L12 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoveVerticalIcon.displayName = "TablerMoveVerticalIcon";
}
