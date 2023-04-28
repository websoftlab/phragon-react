import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSourceCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSourceCodeIcon = React.forwardRef<SVGSVGElement, TablerSourceCodeIconProps>(
	function TablerSourceCodeIcon(props, ref) {
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
				<path d="M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" />
				<path d="M6 5l-2 2l2 2" />
				<path d="M10 9l2 -2l-2 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSourceCodeIcon.displayName = "TablerSourceCodeIcon";
}
