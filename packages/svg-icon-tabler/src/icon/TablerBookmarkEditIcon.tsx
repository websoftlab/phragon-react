import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookmarkEditIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookmarkEditIcon = React.forwardRef<SVGSVGElement, TablerBookmarkEditIconProps>(
	function TablerBookmarkEditIcon(props, ref) {
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
				<path d="M11.35 17.39l-4.35 2.61v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6" />
				<path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBookmarkEditIcon.displayName = "TablerBookmarkEditIcon";
}
