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
				<path d="M9 2 H15 A1 1 0 0 1 16 3 V5 A1 1 0 0 1 15 6 H9 A1 1 0 0 1 8 5 V3 A1 1 0 0 1 9 2 z" />
				<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
				<path d="M12 11h4" />
				<path d="M12 16h4" />
				<path d="M8 11h.01" />
				<path d="M8 16h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClipboardListIcon.displayName = "TablerClipboardListIcon";
}
