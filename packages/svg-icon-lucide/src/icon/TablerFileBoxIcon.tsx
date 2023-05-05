import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileBoxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileBoxIcon = React.forwardRef<SVGSVGElement, TablerFileBoxIconProps>(function TablerFileBoxIcon(
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
			<path d="M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
			<path d="M14 2 L14 8 L20 8" />
			<path d="M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z" />
			<path d="m7 17-4.74-2.85" />
			<path d="m7 17 4.74-2.85" />
			<path d="M7 17v5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileBoxIcon.displayName = "TablerFileBoxIcon";
}
