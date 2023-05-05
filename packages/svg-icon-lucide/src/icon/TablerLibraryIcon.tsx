import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLibraryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLibraryIcon = React.forwardRef<SVGSVGElement, TablerLibraryIconProps>(function TablerLibraryIcon(
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
			<path d="m16 6 4 14" />
			<path d="M12 6v14" />
			<path d="M8 8v12" />
			<path d="M4 4v16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLibraryIcon.displayName = "TablerLibraryIcon";
}
