import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPauseOctagonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPauseOctagonIcon = React.forwardRef<SVGSVGElement, TablerPauseOctagonIconProps>(
	function TablerPauseOctagonIcon(props, ref) {
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
				<path d="M10 15V9" />
				<path d="M14 15V9" />
				<path d="M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPauseOctagonIcon.displayName = "TablerPauseOctagonIcon";
}
