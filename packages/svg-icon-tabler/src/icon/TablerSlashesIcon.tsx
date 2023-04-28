import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSlashesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSlashesIcon = React.forwardRef<SVGSVGElement, TablerSlashesIconProps>(function TablerSlashesIcon(
	props,
	ref
) {
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
			<path d="M14 5l-10 14" />
			<path d="M20 5l-10 14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSlashesIcon.displayName = "TablerSlashesIcon";
}
