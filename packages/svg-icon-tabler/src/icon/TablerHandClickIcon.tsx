import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHandClickIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHandClickIcon = React.forwardRef<SVGSVGElement, TablerHandClickIconProps>(
	function TablerHandClickIcon(props, ref) {
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
				<path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
				<path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />
				<path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
				<path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
				<path d="M5 3l-1 -1" />
				<path d="M4 7h-1" />
				<path d="M14 3l1 -1" />
				<path d="M15 6h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHandClickIcon.displayName = "TablerHandClickIcon";
}
