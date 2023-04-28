import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRowInsertTopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRowInsertTopIcon = React.forwardRef<SVGSVGElement, TablerRowInsertTopIconProps>(
	function TablerRowInsertTopIcon(props, ref) {
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
				<path d="M4 18v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
				<path d="M12 9v-4" />
				<path d="M10 7l4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRowInsertTopIcon.displayName = "TablerRowInsertTopIcon";
}
