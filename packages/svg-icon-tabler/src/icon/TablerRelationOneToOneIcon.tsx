import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRelationOneToOneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRelationOneToOneIcon = React.forwardRef<SVGSVGElement, TablerRelationOneToOneIconProps>(
	function TablerRelationOneToOneIcon(props, ref) {
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
				<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M8 10h1v4" />
				<path d="M15 10h1v4" />
				<path d="M12 10.5l0 .01" />
				<path d="M12 13.5l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRelationOneToOneIcon.displayName = "TablerRelationOneToOneIcon";
}
