import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerImportIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerImportIcon = React.forwardRef<SVGSVGElement, TablerImportIconProps>(function TablerImportIcon(
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
			<path d="M12 3v12" />
			<path d="m8 11 4 4 4-4" />
			<path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerImportIcon.displayName = "TablerImportIcon";
}
