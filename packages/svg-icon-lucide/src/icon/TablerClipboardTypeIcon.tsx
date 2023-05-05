import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClipboardTypeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClipboardTypeIcon = React.forwardRef<SVGSVGElement, TablerClipboardTypeIconProps>(
	function TablerClipboardTypeIcon(props, ref) {
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
				<path d="M9 2 H15 A1 1 0 0 1 16 3 V5 A1 1 0 0 1 15 6 H9 A1 1 0 0 1 8 5 V3 A1 1 0 0 1 9 2 z" />
				<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
				<path d="M9 12v-1h6v1" />
				<path d="M11 17h2" />
				<path d="M12 11v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClipboardTypeIcon.displayName = "TablerClipboardTypeIcon";
}
