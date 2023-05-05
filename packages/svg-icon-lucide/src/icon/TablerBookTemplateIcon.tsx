import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookTemplateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookTemplateIcon = React.forwardRef<SVGSVGElement, TablerBookTemplateIconProps>(
	function TablerBookTemplateIcon(props, ref) {
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
				<path d="M20 22h-2" />
				<path d="M20 15v2h-2" />
				<path d="M4 19.5V15" />
				<path d="M20 8v3" />
				<path d="M18 2h2v2" />
				<path d="M4 11V9" />
				<path d="M12 2h2" />
				<path d="M12 22h2" />
				<path d="M12 17h2" />
				<path d="M8 22H6.5a2.5 2.5 0 0 1 0-5H8" />
				<path d="M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBookTemplateIcon.displayName = "TablerBookTemplateIcon";
}
