import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClipboardListIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClipboardListIcon = React.forwardRef<SVGSVGElement, TablerClipboardListIconProps>(
	function TablerClipboardListIcon(props, ref) {
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
				<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
				<path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
				<path d="M9 12l.01 0" />
				<path d="M13 12l2 0" />
				<path d="M9 16l.01 0" />
				<path d="M13 16l2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClipboardListIcon.displayName = "TablerClipboardListIcon";
}
