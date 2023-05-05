import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderOutputIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderOutputIcon = React.forwardRef<SVGSVGElement, TablerFolderOutputIconProps>(
	function TablerFolderOutputIcon(props, ref) {
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
				<path d="M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2" />
				<path d="M2 13h10" />
				<path d="m5 10-3 3 3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderOutputIcon.displayName = "TablerFolderOutputIcon";
}
