import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCreativeCommonsNcIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCreativeCommonsNcIcon = React.forwardRef<SVGSVGElement, TablerCreativeCommonsNcIconProps>(
	function TablerCreativeCommonsNcIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M15 9h-4.5a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3h-4.5" />
				<path d="M12 7v2" />
				<path d="M12 15v2" />
				<path d="M6 6l3 3" />
				<path d="M15 15l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCreativeCommonsNcIcon.displayName = "TablerCreativeCommonsNcIcon";
}
